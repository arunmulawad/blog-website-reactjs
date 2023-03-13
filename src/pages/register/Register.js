import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input className="registerInput" type="email" placeholder="Enter Username" />
 
            <label>Email</label>
            <input className="registerInput" type="email" placeholder="Enter Email" />
            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Set Password" />
            <button className="registerButton">register</button>          
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">LOGIN</Link>
        </button>
    </div>
  )
}
