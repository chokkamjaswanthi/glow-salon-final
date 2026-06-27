import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BusinessHistory() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory = async () => {

    try {

      const businessId = localStorage.getItem("businessId");

      const res = await axios.get(
        `https://glow-salon-final-xftu.vercel.app/api/appointments/history/${businessId}`
      );

      setAppointments(res.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <>
      <Navbar />

      <div className="register-box">

        <h1>Appointment History</h1>

        {

          appointments.length === 0 ?

          (

            <h3>No Appointment History</h3>

          )

          :

          (

            <table>

              <thead>

                <tr>

                  <th>Customer</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {

                  appointments.map((item) => (

                    <tr key={item._id}>

                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.service}</td>
                      <td>{item.date}</td>
                      <td>{item.status}</td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          )

        }

      </div>

    </>

  );

}

export default BusinessHistory;