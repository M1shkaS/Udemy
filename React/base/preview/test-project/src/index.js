import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from './App';
import BootstrapTest from './BootstrapTest';

import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

//Если хотим поменять стили экспортируемому элементу то 
const BigButton = styled(Button)`
   margin: 0 auto;
   width: 245px;
   text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
      {/* Если хотим поменять тег, то ставим аттрибут as */}
      {/* <BigButton>Big Btn</BigButton> */}
      <BigButton as="a">Отправить отчёт</BigButton>
      {/* <BootstrapTest /> */}

      <BootstrapTest
         left={<h2>Left</h2>}
         right={<h2>Right</h2>}
      />
   </StrictMode>

);

