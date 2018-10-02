import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 8em;
  background-color: #0a3181;
  justify-content: center;
  align-items: center;
  height: 100vh;

  :hover {
    background-color: #637699;
  }
`;

const Name = styled.p`
  color: #fde834;
  font-family: 'K2D', sans-serif;
  font-size: 2em;
`;

function Category(props) {
  return (
    <Container>
      <svg width="90px">{props.image}</svg>
      <Name>{props.name}</Name>
    </Container>
  );
}

export default Category;
