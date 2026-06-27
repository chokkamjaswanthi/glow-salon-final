import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function BusinessDashboard() {

  const navigate = useNavigate();

  if (localStorage.getItem("businessLoggedIn") !== "true") {
    return <Navigate to="/business-login" />;
  }

  const logout = () => {

    localStorage.removeItem("businessLoggedIn");
    localStorage.removeItem("businessToken");
    localStorage.removeItem("businessId");

    alert("Logged Out Successfully!");

    navigate("/business-login");

  };

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-box">

          <h1>🏢 Business Dashboard</h1>

          <p>Welcome to your Salon Dashboard</p>

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
            onClick={() => navigate("/manage-services")}
          >
            💇 Manage Services
          </button>

          <button
            onClick={() => navigate("/manage-gallery")}
          >
            🖼 Manage Gallery
          </button>

          <button
            onClick={() => navigate("/business-profile")}
          >
            👤 Business Profile
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

export default BusinessDashboard;