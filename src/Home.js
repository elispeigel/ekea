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

const HomeScreen = styled.div`
  background: linear-gradient(
      rgba(253, 232, 52, 0.45),
      rgba(253, 232, 52, 0.45)
    ),
    url('https://cdn.pixabay.com/photo/2015/11/07/21/29/living-1032733_960_720.jpg');
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  text-align: center;
  border: 1em #0a3181;
`;

const MainTitle = styled.h1`
  font-size: 12em;
  color: #0a3181;
  margin: 0;
  font-weight: bold;
`;

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <TitleContainer>
          <Title>EKEA</Title>
        </TitleContainer>
        <HomeScreen>
          <MainTitle>EKEA</MainTitle>
        </HomeScreen>
      </Fragment>
    );
  }
}
