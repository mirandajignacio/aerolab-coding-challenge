import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from './Nav';
import Meta from './Meta';

// import React, { useEffect, useState, Component } from 'react';
import { setUser } from '../store';
import api from '../services/api';

const theme = {
  red: '#FF0000',
  black: '#616161',
  grey: '#3A3A3A',
  white: '#FFFFFF',
  lightgrey: '#F9F9F9',
  offWhite: '#EDEDED',
  maxWidth: '1440px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
`;

const Block = styled.div`
  height: 80px;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Source Sans Pro', sans-serif;
  src: url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  font-weight: normal;
  font-style: normal;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #ff8800; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  font-size: 24px;
  line-height: 2;
  font-family: 'Source Sans Pro', sans-serif;
}

a {
  text-decoration: none;
  color: ${theme.black};
}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class Page extends Component {
  signIn = async () => {
    const { setUser: setUserDispatch } = this.props;
    const result = await api.user.me();
    setUserDispatch({ user: result });
  };

  render() {
    const { children, user } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Nav handleSignIn={this.signIn} user={user} />
          <Block />
          <Container>{children}</Container>
          <GlobalStyle />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
