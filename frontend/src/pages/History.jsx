import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function History() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadHistory = async () => {

      try {

        const userEmail = localStorage.getItem("userEmail");

        if (!userEmail) {

          setLoading(false);
          return;

        }

        const res = await axios.get(
          `http://localhost:5000/api/appointments?email=${userEmail}`
        );

        setAppointments(res.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    loadHistory();

  }, []);

  return (
    <>
      <Navbar />

      <div className="history-container">

        <h1>My Booking History</h1>

        {loading ? (

          <h3>Loading...</h3>

        ) : appointments.length === 0 ? (

          <h3>No Bookings Found</h3>

        ) : (

          <table>

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Date</th>
              </tr>

            </thead>

            <tbody>

              {appointments.map((item) => (

                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.service}</td>
                  <td>{item.date}</td>
                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </>
  );

}

export default History;