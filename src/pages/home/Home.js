
import Header from "../../Components/header/Header"
import Posts from "../../Components/posts/Posts"
import Sidebar from "../../Components/sidebar/Sidebar"


import "./home.css"

const Home = () => {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>

      </div>

    </>
   
  )
}

export default Home