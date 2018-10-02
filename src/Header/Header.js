import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { LocationOn, MoreVert, Menu } from 'styled-icons/material';
import { SignIn } from 'styled-icons/octicons';
import { Home, ShoppingCart, Search } from 'styled-icons/fa-solid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleHome = styled(Home)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;

const StyleMenu = styled(Menu)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;
const StyleLocationOn = styled(LocationOn)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;
const StyleSignIn = styled(SignIn)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;
const StyleShoppingCart = styled(ShoppingCart)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;
const StyleSearch = styled(Search)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;
const StyleMoreVert = styled(MoreVert)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;

const Container = styled.div`
  background-color: #0a3181;
  height: 4em;
  padding: 1em;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Grid columns={16}>
          <Cell>
            <Link to="/">
              <StyleHome />
            </Link>
          </Cell>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell>
            <Link to="/categories">
              <StyleMenu />
            </Link>
          </Cell>
          <Cell>
            <Link to="/stores">
              <StyleLocationOn />
            </Link>
          </Cell>
          <Cell>
            <Link to="/signin">
              <StyleSignIn />
            </Link>
          </Cell>
          <Cell>
            <Link to="/cart">
              <StyleShoppingCart />
            </Link>
          </Cell>
          <Cell>
            <Link to="/search">
              <StyleSearch />
            </Link>
          </Cell>
          <Cell>
            <Link to="/more">
              <StyleMoreVert />
            </Link>
          </Cell>
        </Grid>
      </Container>
    );
  }
}
