import "./settings.css"
import Sidebar from "../../Components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_hlf_02_0.jpg" alt="" />
            <label htmlFor="fileInput">
            <i class="settingsPPIcon fa-regular fa-user"></i>

            </label>
            <input type="file" id="fileInput" style={{display : "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Arun" />
          <label>Email</label>
          <input type="email" placeholder="Arunmulawad145@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>

    </div>
  )
}
