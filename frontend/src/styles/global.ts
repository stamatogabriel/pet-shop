import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#fbfbfb',
    secondary: {
      main: '#ff6600',
      dark: '#ff1100',
    },
    success: {
      dark: '#437D27'
    },
    error: '#c53030',
    white: {
      main: '#fff',
      secondary: '#f6f6f6',
    },
    black: {
      main: '#000',
      secondary: '#111',
    },
    background: {
      main: '#fbfbfb',
      secondary: '#ddd',
    },
  },
}

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: Montserrat, sans-serif;
  background: #fbfbfb;
  color: #4a4a4a;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.5s;
  :hover {
    color: #666;
  }
}
button {
  cursor: pointer;
}
* {
  box-sizing: border-box;
}
input, textarea, select {
    outline: 0;
}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
`
