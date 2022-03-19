import './Login.css'
import {useRoutes, A, navigate} from 'hookrouter';
import Routes from './router'
  


function Login() {
  async function handleSubmit(event) {
    event.preventDefault()
    window.location.replace('www.google.com')
  }
  const routeResult = useRoutes(Routes)
  return (
    <form id="form" className="loginbox" >
      <h1 className="logintag">Login</h1>
      <div className='logintag'>
      <input type="text" className='username' name='username' placeholder='Username' required></input>
      </div>
      <div className='logintag'>
      <input type="password" className='password' name='password' placeholder='Password' required></input>
      </div>
      <div className='logintag submitbox'>
      <input type="submit" className='submit' name='submit' value="Login" onSubmit={handleSubmit}></input>
      </div>
    </form>
  );

}

export default Login;
