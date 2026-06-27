import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function SalonDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [salon, setSalon] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {

    loadSalon();
    loadServices();

    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const loadSalon = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/business"
      );

      const data = res.data.find(
        (item) => item._id === id
      );

      setSalon(data);

    } catch (error) {

      console.log(error);

    }

  };

  const loadServices = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/services?businessId=${id}`
      );

      setServices(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const bookService = (service) => {

    localStorage.setItem("selectedBusinessId", salon._id);
    localStorage.setItem("selectedSalonName", salon.salonName);
    localStorage.setItem("selectedService", service.serviceName);

    navigate("/appointment");

  };

  if (!salon) {

    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Loading...
        </h2>
      </>
    );

  }

  return (

    <>
      <Navbar />

      <div className="register-box">

        <h1>{salon.salonName}</h1>

        <h3>{salon.ownerName}</h3>

        <p>{salon.address}</p>

        <br />

        <h2>Available Services</h2>

        {services.length === 0 ? (

          <h3>No Services Available</h3>

        ) : (

          <table>

            <thead>

              <tr>

                <th>Service</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Book</th>

              </tr>

            </thead>

            <tbody>

              {services.map((item) => (

                <tr key={item._id}>

                  <td>{item.serviceName}</td>

                  <td>₹ {item.price}</td>

                  <td>{item.duration}</td>

                  <td>

                    <button
                      onClick={() => bookService(item)}
                    >
                      Book Now
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </>

  );

}

export default SalonDetails;