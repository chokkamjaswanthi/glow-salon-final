import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://glow-salon-final-xftu.vercel.app/api/users/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", form.email);

      if (res.data.userId) {
        localStorage.setItem("userId", res.data.userId);
      }

      if (res.data.name) {
        localStorage.setItem("userName", res.data.name);
      }

      alert("Login Successful!");

      // Customer goes to Home page
      navigate("/");

    }

    catch (error) {

      console.log(error);

      alert("Invalid Email or Password");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <>
      <Navbar />

      <div className="login-container">

        <div className="login-box">

          <h1>User Login</h1>

          <p>Welcome Back to Glow Salon 🌸</p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="register-link">

            Don't have an account?{" "}

            <Link to="/register">

              Register

            </Link>

          </p>

        </div>

      </div>

    </>

  );

}

export default Login;