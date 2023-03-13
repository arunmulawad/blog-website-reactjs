import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg"
        src="https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29._UR1920,1080_.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">   
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeInput" autoFocus="true"/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText"
                    placeholder="Tell Your Story..."
                    type="text"            
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
