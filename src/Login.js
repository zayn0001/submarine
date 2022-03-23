
import {useRoutes, A, navigate} from 'hookrouter';
import Navbar from './Navbar/Navbar';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, {useState} from 'react'

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

export default function Login({setToken}) {
  async function handleSubmit(event) {
    console.log("Sdfsdfsd")
    event.preventDefault()
    // const token = await loginUser({
    //   username,
    //   password
    // });
    // console.log(token)
    setToken({"token":"324"});
  }
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <div className='contain'>
    <form id="form" className="loginbox" >
      <h1 className='greeting'>
      <div className='greet1'></div>
      <div className='greet2'></div>
      </h1>
      <div className='logintag'>
      <input type="text" onChange={e => setUserName(e.target.value)} className='linetext username' name='username' placeholder='Username' required></input>
      </div>
      <div className='logintag'>
      <input type="password" onChange={e => setPassword(e.target.value)} className='linetext password' name='password' placeholder='Password' required></input>
      </div>
      <div className='submitbox'>
      <button type="submit" className='submit' name='submit' value="Login" onClick={handleSubmit}>Login</button>
      </div>
    </form>
    </div>
  );
}


