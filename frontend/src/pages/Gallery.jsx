import Navbar from "../components/Navbar";

import salon1 from "../images/salon1.jpg";
import salon2 from "../images/salon2.jpg";
import salon3 from "../images/salon3.jpg";

function Gallery() {

  return (

    <>
      <Navbar />

      <div className="gallery">

        <img src={salon1} alt="Salon 1" />

        <img src={salon2} alt="Salon 2" />

        <img src={salon3} alt="Salon 3" />

      </div>

    </>

  );

}

export default Gallery;