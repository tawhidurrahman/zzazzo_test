import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { globalStyles } from 'styles/global-styles';
import Login from 'views/Login';
import Nav from 'views/components/Nav';
import { Content, MainPanel } from 'components/MainPanel';
import ProtectedRoute from 'components/ProtectedRoute';
import AllProducts from 'views/AllProducts';
import ProductDetails from 'views/ProductDetails';
import ProductsByCategory from 'views/ProductsByCategory';

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path='/' element={<AllProducts />} />
      <Route path='/:id' element={<ProductDetails />} />
      <Route path='/category/:category' element={<ProductsByCategory />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <div className='App'>
      <Router>
        <MainPanel>
          <Nav />
          <Content>
            <Routes>
              <Route
                path='/*'
                element={
                  <ProtectedRoute>
                    <AuthenticatedApp />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Content>
        </MainPanel>
      </Router>
    </div>
  );
}

export default App;
