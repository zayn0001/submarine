import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Navbar from './Navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import './index.css'
import App from './App'



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

var i = 0;
var j = 0;
var txt1 = 'Good';
var txt2;
var date = new Date()
var timeofday = date.getHours()
if (timeofday < 12 && timeofday >= 4){txt2 = 'Morning.';}
else if (timeofday >= 12 && timeofday < 17) {txt2 = 'Afternoon.';}
else {txt2 = 'Evening.'}
var speed = 80;
//console.log(timeofday)
//console.log(txt2)
function typeWriter() {
  if (i < txt1.length) {
    document.getElementsByClassName("greet1")[0].innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (j < txt2.length) {
    document.getElementsByClassName("greet2")[0].innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()


  
// If you want to start measuring performance in your Login, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
