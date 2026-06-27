import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Register from "./pages/Register";
import Login from "./pages/Login";

import Appointment from "./pages/Appointment";
import History from "./pages/History";
import Profile from "./pages/Profile";

import Salons from "./pages/Salons";
import SalonDetails from "./pages/SalonDetails";

import BusinessRegister from "./pages/BusinessRegister";
import BusinessLogin from "./pages/BusinessLogin";
import BusinessDashboard from "./pages/BusinessDashboard";
import BusinessBookings from "./pages/BusinessBookings";
import BusinessHistory from "./pages/BusinessHistory";
import BusinessProfile from "./pages/BusinessProfile";

import ManageServices from "./pages/ManageServices";
import ManageGallery from "./pages/ManageGallery";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Shared Pages */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Customer */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/salons"
          element={
            <ProtectedRoute>
              <Salons />
            </ProtectedRoute>
          }
        />

        <Route
          path="/salon/:id"
          element={
            <ProtectedRoute>
              <SalonDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Business */}

        <Route path="/business-register" element={<BusinessRegister />} />

        <Route path="/business-login" element={<BusinessLogin />} />

        <Route path="/business-dashboard" element={<BusinessDashboard />} />

        <Route path="/business-bookings" element={<BusinessBookings />} />

        <Route path="/business-history" element={<BusinessHistory />} />

        <Route path="/manage-services" element={<ManageServices />} />

        <Route path="/manage-gallery" element={<ManageGallery />} />

        <Route path="/business-profile" element={<BusinessProfile />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;