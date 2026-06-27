import { useState } from "react";
import Navbar from "../components/Navbar";

function ManageGallery() {

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const chooseImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

  };

  const uploadImage = () => {

    if (!selectedImage) {

      alert("Please choose an image.");

      return;

    }

    const imageURL = URL.createObjectURL(selectedImage);

    setImages([...images, imageURL]);

    setSelectedImage(null);

    alert("Image Added Successfully!");

  };

  const deleteImage = (index) => {

    const updatedImages = images.filter(

      (_, i) => i !== index

    );

    setImages(updatedImages);

  };

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <div className="dashboard-box">

          <h1>🖼 Manage Gallery</h1>

          <input

            type="file"

            accept="image/*"

            onChange={chooseImage}

          />

          <br />

          <br />

          <button

            onClick={uploadImage}

          >

            Upload Image

          </button>

          <br />

          <br />

          {

            images.length === 0 ?

            (

              <h3>No Images Uploaded</h3>

            )

            :

            (

              <div
                style={{
                  display:"flex",
                  gap:"20px",
                  flexWrap:"wrap",
                  justifyContent:"center"
                }}
              >

                {

                  images.map((img,index)=>(

                    <div key={index}>

                      <img

                        src={img}

                        alt="Gallery"

                        style={{
                          width:"220px",
                          height:"170px",
                          objectFit:"cover",
                          borderRadius:"12px"
                        }}

                      />

                      <br/>

                      <button

                        onClick={()=>deleteImage(index)}

                      >

                        Delete

                      </button>

                    </div>

                  ))

                }

              </div>

            )

          }

        </div>

      </div>

    </>

  );

}

export default ManageGallery;