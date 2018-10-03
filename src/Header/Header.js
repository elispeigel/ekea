import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { LocationOn, MoreVert, Menu, ExitToApp } from 'styled-icons/material';
import { SignIn } from 'styled-icons/octicons';
import { Check, Home, ShoppingCart, Search } from 'styled-icons/fa-solid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';

const StyleModal = styled(ReactModal)`
  height: 3em;
  width: 24em;
  right: 0;
  outline: none;
`;

const ModalContainer = styled.div`
  background: #0a3181;
  vertical-align: middle;
  border-radius: 1em;
  right: 0;
  margin-top: 7em;
`;

const SearchButton = styled.button`
  all: unset;
`;

const SearchInput = styled.input`
  all: unset;
  background: white;
  margin-top: 1em;
  margin-left: 1em;
  border-radius: 10px;
`;

const StyleExit = styled(ExitToApp)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;

const StyleCheck = styled(Check)`
  color: white;
  height: 3em;
  :hover {
    color: #fde834;
  }
`;

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
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSearchModal() {
    window.location.reload(true);
  }

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
            <Link to="/more">
              <StyleMoreVert />
            </Link>
          </Cell>
          <Cell>
            <SearchButton onClick={this.handleOpenModal}>
              <StyleSearch />
            </SearchButton>
          </Cell>
          <Cell>
            <StyleModal isOpen={this.state.showModal} contentLabel="Modal">
              <ModalContainer>
                <Grid columns={4} justifyContent="space-around">
                  <Cell width={2}>
                    <SearchInput type="text" placeholder="Search" />
                  </Cell>
                  <Cell width={1}>
                    <SearchButton onClick={this.handleSearchModal}>
                      <StyleCheck />
                    </SearchButton>
                  </Cell>
                  <Cell width={1} center middle>
                    <SearchButton onClick={this.handleCloseModal}>
                      <StyleExit />
                    </SearchButton>
                  </Cell>
                </Grid>
              </ModalContainer>
            </StyleModal>
          </Cell>
        </Grid>
      </Container>
    );
  }
}
