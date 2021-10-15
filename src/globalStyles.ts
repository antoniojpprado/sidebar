import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    box-sizing: border-box;
  }

  body {
    padding: 0px;
    margin: 0px;
    overflow-y: auto;
    overflow-x: auto;
    background-color: #f0f2f5;
  }
`;

export const Form = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 300px;
  align-items: center;
  font-size: 1rem;
  color: #000000;
`;


export default GlobalStyle;