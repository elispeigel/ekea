import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-family: futura;
  color: #fde834;
  font-size: 6 em;
`;

const TitleContainer = styled.div`
  background-color: #0a3181;
`;

const LoginContainer = styled.div`
  text-align: center;
  background-color: #fde834;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  width: 20em;
  padding: 1em;
  top: 50%;
  border-radius: 1em;
`;

const Container = styled.div`
  height: 100vh;
  background: radial-gradient(51% 150%, #1C479C 50%, #0a3181 100%);
`;

const SignInTitle = styled.h1`
  color: #0a3181;
  font-size: 2em;
`;

export default class SignIn extends Component {
  render() {
    return (
      <Fragment>
        <TitleContainer>
          <Title>EKEA</Title>
        </TitleContainer>
        <Container>
          <LoginContainer>
            <SignInTitle>Sign In or Sign Up</SignInTitle>
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='password'/>
            <input type='submit'/>
          </LoginContainer>
        </Container>
      </Fragment>
    );
  }
}
