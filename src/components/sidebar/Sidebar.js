import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNk_AVyb4OvjQfG3iq1ClPMUfXM84oaLBog&usqp=CAU" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, praesentium consequatur odit eligendi delectus facilis nostrum corrupti aliquid, aperiam pariatur hic modi deleniti fugiat exercitationem libero laboriosam optio. Sed, suscipit.</p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Trending</li>
            <li className="sidebarListItem">TV Shows</li>
            <li className="sidebarListItem">Movies</li>
            <li className="sidebarListItem">Watch</li>
            <li className="sidebarListItem">Awards & Events</li>
            <li className="sidebarListItem">Celebs</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <ul className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar