
import { Link } from "react-router-dom"
import "./topbar.css"

function Topbar() {
  const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY92dsoCHUut37P7OtITYNwvIVHoTR1pevxQ&usqp=CAU" alt=""
             />
            ):(
              <>
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">REGISTER</Link>
                </li>
              </ul>
              </>          

            )
          }
             <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            
        </div>

    </div>
  )
}

export default Topbar