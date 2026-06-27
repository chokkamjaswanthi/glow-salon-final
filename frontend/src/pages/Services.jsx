import Navbar from "../components/Navbar";

function Services() {

  return (

    <>
      <Navbar />

      <div className="services">

        <h1>Our Services</h1>

        <div className="service-box">

          <h2>Hair Cut</h2>

          <p>₹300</p>

        </div>

        <div className="service-box">

          <h2>Facial</h2>

          <p>₹700</p>

        </div>

        <div className="service-box">

          <h2>Bridal Makeup</h2>

          <p>₹5000</p>

        </div>

      </div>

    </>

  );

}

export default Services;