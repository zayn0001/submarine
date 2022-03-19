import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Navbar from './Navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import './index.css'

ReactDOM.render(
  <Login/>,
  document.getElementById('root')
);
 
// If you want to start measuring performance in your Login, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
