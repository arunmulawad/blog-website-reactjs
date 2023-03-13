import "./post.css"

const Post = () => {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://www.teahub.io/photos/full/178-1785554_android-iphone-desktop-hd-backgrounds-wallpapers-transformers-wallpaper.jpg" 
        alt="" />   

        <div className="postInfo">
            <div className="postCats">               
                <span className="postCat">Transformers</span>
                <span className="postCat">RISE OF THE BEASTS</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur 
            </span>
            <hr />
            <span className="postData">Returning to the action and spectacle that have captured moviegoers around the world, Transformers: Rise of the Beasts will take audiences on a ‘90s globetrotting adventure with the Autobots and introduce a whole new breed of Transformer – the Maximals – to the existing battle on earth between Autobots and Decepticons. Directed by Steven Caple Jr. and starring Anthony Ramos and Dominique Fishback, the film arrives in theatres June 9, 2023.</span>           
        </div>    
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, optio!

        </p>
    </div>
  )
}

export default Post