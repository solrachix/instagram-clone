import { createGlobalStyle } from 'styled-components';

import Roboto from './fonts/Roboto';
import OpenSans from './fonts/OpenSans';

export default createGlobalStyle`
  * {
    list-style:none;
    text-decoration:none;
    margin:0; padding:0;
    border:0;
    box-sizing:border-box;    
    outline:0;

    text-align:left;
    font-size:1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    /* color: ${({ theme }) => theme.colors.text}; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body{    
    background: ${({ theme }) => theme.colors.primary };
  }

  button{
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ${Roboto}
  ${OpenSans}
`;