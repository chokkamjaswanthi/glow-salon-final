import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {

  const navigate = useNavigate();

  const businessId = localStorage.getItem("selectedBusinessId");
  const salonName = localStorage.getItem("selectedSalonName");
  const selectedService = localStorage.getItem("selectedService");
  const userEmail = localStorage.getItem("userEmail");

  const [form, setForm] = useState({

    name: "",
    email: userEmail || "",
    phone: "",
    service: selectedService || "",
    date: ""

  });

  const handleChange = (e) => {

    setForm({

      ...form,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!businessId || !salonName) {

      alert("Please select a salon first.");

      navigate("/salons");

      return;

    }

    try {

      await axios.post(

        "http://localhost:5000/api/appointments",

        {

          businessId,
          salonName,
          ...form

        }

      );

      alert("Appointment Booked Successfully!");

      localStorage.removeItem("selectedBusinessId");
      localStorage.removeItem("selectedSalonName");
      localStorage.removeItem("selectedService");

      setForm({

        name: "",
        email: userEmail || "",
        phone: "",
        service: "",
        date: ""

      });

      navigate("/history");

    }

    catch (error) {

      console.log(error);

      alert("Failed to Book Appointment");

    }

  };

  return (

    <div className="appointment">

      <h1>Book Appointment</h1>

      <h2>{salonName}</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="service"
          placeholder="Service"
          value={form.service}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button type="submit">

          Book Appointment

        </button>

      </form>

    </div>

  );

}

export default AppointmentForm;