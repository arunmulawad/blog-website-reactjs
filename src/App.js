import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Post from "./Components/post/Post";
import Topbar from "./Components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/single" element={<Single/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/post" element={<Post/>}/>



    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
