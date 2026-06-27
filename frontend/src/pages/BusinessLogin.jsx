import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function BusinessLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
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

      const res = await axios.post(
        "http://localhost:5000/api/business/login",
        form
      );

      localStorage.setItem("businessToken", res.data.token);
      localStorage.setItem("businessLoggedIn", "true");
      localStorage.setItem("businessId", res.data.businessId);

      alert("Business Login Successful!");

      navigate("/business-dashboard");

    } catch (error) {

      alert("Invalid Email or Password");

    }

  };

  return (

    <>
      <Navbar />

      <div className="login-container">

        <div className="login-box">

          <h1>Business Login</h1>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={form.email}
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

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>

    </>

  );

}

export default BusinessLogin;