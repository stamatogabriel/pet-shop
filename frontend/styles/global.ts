import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#fbfbfb',
    secondary: {
      main: '#ff6600',
      dark: '#ff4400',
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

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  background: #fbfbfb;
  color: #333;
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
button{
  cursor: pointer;
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

export default GlobalStyle
