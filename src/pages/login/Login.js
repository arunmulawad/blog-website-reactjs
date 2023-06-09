import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="email" placeholder="Email" />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Password" />
            <button className="loginButton">Login</button>          
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">REGISTER</Link>
        </button>
    </div>
  )
}
