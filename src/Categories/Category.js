import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 10em;
  background-color: #0a3181;
  justify-content: center;
  align-items: center;
  height: 100vh;

  :hover {
    background-image: url(${props => props.bgimage});
  }
`;

const Name = styled.p`
  color: #fde834;
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
