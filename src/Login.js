
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
    <form id="form" className="loginbox" >
      <h1 className="logintag">Login</h1>
      <div className='logintag'>
      <input type="text" className='linetext username' name='username' placeholder='Username' required></input>
      </div>
      <div className='logintag'>
      <input type="password" className='linetext password' name='password' placeholder='Password' required></input>
      </div>
      <div className='logintag submitbox'>
      <button type="submit" className='submit' name='submit' value="Login" onClick={handleSubmit}>Login</button>
      </div>
    </form>
  );

}

export default Login;
