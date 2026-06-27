import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function BusinessProfile() {

  const navigate = useNavigate();

  const salonName = localStorage.getItem("salonName");
  const ownerName = localStorage.getItem("ownerName");
  const businessId = localStorage.getItem("businessId");

  const switchAccount = () => {

    localStorage.removeItem("businessLoggedIn");
    localStorage.removeItem("businessToken");
    localStorage.removeItem("businessId");

    navigate("/login");

  };

  const logout = () => {

    localStorage.removeItem("businessLoggedIn");
    localStorage.removeItem("businessToken");
    localStorage.removeItem("businessId");
    localStorage.removeItem("salonName");
    localStorage.removeItem("ownerName");

    alert("Logged Out Successfully!");

    navigate("/business-login");

  };

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-box">

          <h1>🏢 Business Profile</h1>

          <br />

          <h3>Salon Name</h3>

          <p>{salonName}</p>

          <br />

          <h3>Owner Name</h3>

          <p>{ownerName}</p>

          <br />

          <h3>Business ID</h3>

          <p>{businessId}</p>

          <br />

          <button
            onClick={() => navigate("/manage-services")}
          >
            💇 Manage Services
          </button>

          <button
            onClick={() => navigate("/business-bookings")}
          >
            📅 Customer Bookings
          </button>

          <button
            onClick={() => navigate("/business-history")}
          >
            📖 Appointment History
          </button>

          <button
            onClick={() => navigate("/manage-gallery")}
          >
            🖼 Manage Gallery
          </button>

          <button
            onClick={switchAccount}
          >
            🔄 Switch To Customer Account
          </button>

          <button
            className="logout-btn"
            onClick={logout}
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </>

  );

}

export default BusinessProfile;