import "./single.css"
import Sidebar from "../../Components/sidebar/Sidebar"
import SinglePost from "../../Components/singlePost/SinglePost"

const Single = () => {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>

    </div>
  )
}

export default Single