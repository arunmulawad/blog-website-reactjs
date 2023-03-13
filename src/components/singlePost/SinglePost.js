import "./singlePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://www.j-14.com/wp-content/uploads/2022/11/WEDNESDAY_103_Unit_01357R.jpg?fit=3600%2C2400&quality=86&strip=all" alt="" />
            <h1 className="singlePostTitle">Wednesday.
            <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : Charles Addams</span>
                <span className="singlePostData">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Wednesday is an American coming-of-age supernatural comedy horror streaming television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa appearing in supporting roles. Four out of the eight episodes are directed by Tim Burton, who also serves as executive producer. It revolves around Wednesday Addams, who attempts to solve a monster mystery at her new school.</p>
        </div>
    </div>
  )
}

export default SinglePost