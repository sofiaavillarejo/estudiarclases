import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './components/Car';
// import Propiedades from './components/Herencia';
// import SumarNumeros from './components/SumarNumeros';
// import PintoNumPadre from './components/PintoNumPadre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Propiedades nombre="Sofia" edad="23" /> */}
    {/* <SumarNumeros/> */}
    {/* <PintoNumPadre /> */}
    <Car marca = "Audi" modelo="Q3" aceleracion="25" velocidadmaxima="240"/>
    <Car marca = "Tesla" modelo="aaaa" aceleracion="50" velocidadmaxima="440"/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
