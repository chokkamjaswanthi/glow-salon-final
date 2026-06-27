import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BusinessRegister() {

  const [form, setForm] = useState({
    salonName: "",
    ownerName: "",
    email: "",
    phone: "",
    password: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://glow-salon-final-xftu.vercel.app/api/business/register",
        form
      );

      alert("Business Registered Successfully!");

      setForm({
        salonName: "",
        ownerName: "",
        email: "",
        phone: "",
        password: "",
        address: ""
      });

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (
    <>
      <Navbar />

      <div className="register-box">

        <h1>Business Registration</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="salonName"
            placeholder="Salon Name"
            value={form.salonName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={form.ownerName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Salon Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register Business
          </button>

        </form>

      </div>

    </>
  );
}

export default BusinessRegister;