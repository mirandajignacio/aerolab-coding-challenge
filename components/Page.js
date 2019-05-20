import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#FF0000",
  black: "#616161",
  grey: "#3A3A3A",
  white: "#FFFFFF",
  lightgrey: "#F9F9F9",
  offWhite: "#EDEDED",
  maxWidth: "1440px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
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

let lastScrollY = 0;
let ticking = false;

class Page extends Component {
  state = {
    scrolling: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY == 0) {
          this.setState({ scrolling: false });
        } else if (!this.state.scrolling) {
          this.setState({ scrolling: true });
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header scrolling={this.state.scrolling ? 1 : 0} />
          <Block />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
