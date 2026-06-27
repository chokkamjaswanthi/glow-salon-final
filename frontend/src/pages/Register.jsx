import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      await axios.post(
        "https://glow-salon-final-xftu.vercel.app/api/users/register",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password
        }
      );

      alert("Registration Successful!");

      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {

      console.log(error);
      alert("Registration Failed");

    }

  };

  return (

    <>
      <Navbar />

      <div className="register">

        <div className="register-box">

          <h1>User Registration</h1>

          <p>Create your Glow Salon account</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="👤 Enter Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="📧 Enter Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="📱 Enter Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="🔒 Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="🔒 Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Register
            </button>

          </form>

        </div>

      </div>

    </>

  );

}

export default Register;