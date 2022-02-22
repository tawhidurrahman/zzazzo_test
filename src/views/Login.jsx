import React, { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import { CardBody, CardFooter } from 'components/Card';
import { LoginCard, LoginHeader, LoginTitle } from 'components/Cards/Login';
import { Container } from 'components/Container';
import { Col, Row } from 'components/FlexGrid';
import { Image } from 'components/Image';
import { Form, FormGroup, Input } from 'components/Form';
import loginHeaderImg from 'assets/img/card-danger.png';
import { useAuth } from 'context/auth-context';
import { useAsync } from 'utils/hooks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const { isLoading, isError, error, run } = useAsync();

  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  useEffect(() => {
    if (user?.token) {
      navigate('/', { replace: true });
    }
  }, [navigate, user]);

  const loginUser = (e) => {
    e.preventDefault();
    run(login({ username, password }));
  };

  return (
    <Container>
      <Row>
        <Col css={{ mx: 'auto' }} col={{ '@md': '6', '@lg': '5', '@xl': '4' }}>
          <Form>
            <LoginCard>
              <LoginHeader>
                <Image css={{ width: '100%' }} src={loginHeaderImg} />
                <LoginTitle>Log in</LoginTitle>
              </LoginHeader>
              <CardBody>
                <FormGroup>
                  <Input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value.trim())}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value.trim())}
                  />
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button outlined block onClick={loginUser}>
                  Login{isLoading ? '...' : ''}
                </Button>
              </CardFooter>
            </LoginCard>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
