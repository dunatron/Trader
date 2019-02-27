import React, { Component } from "react"
import styled, { ThemeProvider, injectGlobal } from "styled-components"
import Header from "./Header"
import Meta from "./Meta"
// Material UI
import NoSsr from "@material-ui/core/NoSsr"
import { createMuiTheme } from "@material-ui/core/styles"
import { darken, fade } from "@material-ui/core/styles/colorManipulator"
import muiTheme from "../theme"

// const theme = createMuiTheme({ typography: { useNextVariants: true } })

const theme = createMuiTheme(muiTheme)

const StyledButton = styled.button`
  padding: 8px 12px;
  border: 1px solid;
  cursor: pointer;
  outline: none;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  color: ${props => props.theme.palette.primary.contrastText};
  background-color: ${props => props.theme.palette.primary.main};
  border-color: ${props => props.theme.palette.primary.main};
  transition: ${props =>
    props.theme.transitions.create(["background-color", "box-shadow"])};
  font-family: ${[
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(",")};
  &:hover {
    background-color: ${props => darken(props.theme.palette.primary.main, 0.1)};
    border-color: ${props => darken(props.theme.palette.primary.main, 0.2)};
  }
  &:active {
    background-color: ${props => darken(props.theme.palette.primary.main, 0.2)};
    border-color: ${props => darken(props.theme.palette.primary.main, 0.3)};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem
      ${props => fade(props.theme.palette.primary.main, 0.5)};
  }
  font-size: 18px;
  ${theme.breakpoints.up("md")} {
    font-size: 16px;
  }
`

const customTheme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  // palette: {
  //   primary: {
  //     main: "#3f51b5",
  //     contrastText: "#FFF",
  //   },
  //   secondary: {
  //     main: "#e00082",
  //   },
  // },
  palette: {
    primary: {
      main: "#e00082",
      contrastText: "#FFF",
    },
    secondary: {
      // main: "#3f51b5",
      main: "yellow",
    },
  },
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
  #nprogress {
    .bar {
      height:20px;
      background: ${props => props.theme.palette.secondary.main};
    }
    .spinner-icon {
      border-top-color: #3f51b5;
     border-left-color: #3f51b5;
    }
    .peg {
      box-shadow: 0 0 10px #3f51b5, 0 0 5px #3f51b5;
    }
  }
`

class Page extends Component {
  render() {
    return (
      <NoSsr>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </NoSsr>
    )
  }
}

export default Page
