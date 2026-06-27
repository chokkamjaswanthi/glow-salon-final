import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Salons() {

  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    loadSalons();

  }, []);

  const loadSalons = async () => {

    try {

      const res = await axios.get(
        "https://glow-salon-final-xftu.vercel.app/api/business"
      );

      setSalons(res.data);

    } catch (error) {

      console.log(error);
      alert("Unable to load salons.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <>
      <Navbar />

      <div className="salons-container">

        <h1>Browse Salons</h1>

        {

          loading ? (

            <h2>Loading Salons...</h2>

          ) : salons.length === 0 ? (

            <h2>No Salons Available</h2>

          ) : (

            <div className="salons-grid">

              {

                salons.map((salon) => (

                  <div
                    className="salon-card"
                    key={salon._id}
                  >

                    <img
                      src={
                        salon.logo
                          ? salon.logo
                          : "https://via.placeholder.com/300x200?text=Glow+Salon"
                      }
                      alt={salon.salonName}
                    />

                    <h2>{salon.salonName}</h2>

                    <p>{salon.address}</p>

                    <button
                      onClick={() =>
                        navigate(`/salon/${salon._id}`)
                      }
                    >
                      View Salon
                    </button>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </>

  );

}

export default Salons;