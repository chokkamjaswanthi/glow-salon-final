import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BusinessBookings() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {

    try {

      const businessId = localStorage.getItem("businessId");

      const res = await axios.get(
        `https://glow-salon-final-xftu.vercel.app/api/appointments?businessId=${businessId}`
      );

      setAppointments(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `https://glow-salon-final-xftu.vercel.app/api/appointments/${id}`,
        { status }
      );

      loadBookings();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteBooking = async (id) => {

    if (!window.confirm("Delete this booking?")) return;

    try {

      await axios.delete(
        `https://glow-salon-final-xftu.vercel.app/api/appointments/${id}`
      );

      loadBookings();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <>
      <Navbar />

      <div className="register-box">

        <h1>Customer Bookings</h1>

        {appointments.length === 0 ? (

          <h3>No Bookings Yet</h3>

        ) : (

          <table>

            <thead>

              <tr>

                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>

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

                  <td>
                    <strong>{item.status || "Pending"}</strong>
                  </td>

                  <td>

                    <button
                      onClick={() =>
                        updateStatus(item._id, "Accepted")
                      }
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(item._id, "Rejected")
                      }
                    >
                      Reject
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(item._id, "Completed")
                      }
                    >
                      Complete
                    </button>

                    <button
                      onClick={() =>
                        deleteBooking(item._id)
                      }
                    >
                      Delete
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

export default BusinessBookings;