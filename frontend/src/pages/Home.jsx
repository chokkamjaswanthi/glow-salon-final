import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {

  return (

    <>

      <Navbar />

      <div className="hero">

        <div className="hero-content">

          <h1>Find Your Perfect Salon</h1>

          <p>
            Book Beauty & Wellness Appointments Near You
          </p>

          <Link to="/salons">

            <button>

              Browse Salons

            </button>

          </Link>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Home;