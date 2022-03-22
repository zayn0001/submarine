
import {useRoutes, A, navigate} from 'hookrouter';
import Routes from './router'
import Navbar from './Navbar/Navbar';
import ReactDOM from 'react-dom';


function Login() {
  async function handleSubmit(event) {
    console.log("Sdfsdfsd")
    event.preventDefault()
    ReactDOM.render(<Navbar/>, document.getElementById("root"))
    navigate('/dashboard')
  }
  return (
    <div className='contain'>
    <form id="form" className="loginbox" >
      <h1 className='greeting'>
      <div className='greet1'></div>
      <div className='greet2'></div>
      </h1>
      <div className='logintag'>
      <input type="text" className='linetext username' name='username' placeholder='Username' required></input>
      </div>
      <div className='logintag'>
      <input type="password" className='linetext password' name='password' placeholder='Password' required></input>
      </div>
      <div className='submitbox'>
      <button type="submit" className='submit' name='submit' value="Login" onClick={handleSubmit}>Login</button>
      </div>
    </form>
    </div>
  );

}

export default Login;
