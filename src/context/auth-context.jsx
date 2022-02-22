import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import * as auth from 'providers/auth-provider';
import { client } from 'utils/api-client';
import { useAsync } from 'utils/hooks';

async function bootstrapAppData() {
  let user = null;

  const token = await auth.getToken();
  if (token) {
    user = { token };
  }
  return user;
}

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync();

  useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = useCallback(
    (form) => auth.login(form).then((user) => setData(user)),
    [setData]
  );
  const logout = useCallback(() => {
    auth.logout();
    // queryClient.clear()
    setData(null);
  }, [
    setData,
    // queryClient
  ]);

  const value = useMemo(() => ({ user, login, logout }), [login, logout, user]);

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

function useClient() {
  const { user } = useAuth();
  const token = user?.token;
  return useCallback(
    (endpoint, config) => client(endpoint, { ...config, token }),
    [token]
  );
}

export { AuthProvider, useAuth, useClient };
