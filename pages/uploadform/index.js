import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../component/Navigation";
import { useState } from "react";

export default function PrivatePage(props) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {    
    console.log('..................................................................');    
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);    
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };

  return (
    <div>
      <Navigation/>
      <div style={{ textAlign:'center', marginTop:'10%'}}>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
          
        <input type="file" name="myImage"  onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send
        </button>
      </div>
    </div>
  );
}