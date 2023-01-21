import react from "react"
import AddPost from "./addpost/AddPost"
import AddToGallery from "./addToGallery/addToGallery"
import "./styles.css"

  const AdminCell=()=>{
    return <>
      <div className="adminCell center">
         
          <AddPost />
         < AddToGallery />
      </div>
    </>
  }

  export default AdminCell