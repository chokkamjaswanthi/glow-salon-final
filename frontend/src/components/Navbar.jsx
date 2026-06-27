import { Link } from "react-router-dom";

function Navbar() {

  const userLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const businessLoggedIn =
    localStorage.getItem("businessLoggedIn") === "true";

  return (

    <nav className="navbar">

      <h2 className="logo">

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Glow Salon
        </Link>

      </h2>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Guest */}

        {!userLoggedIn && !businessLoggedIn && (

          <>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>

            <li><Link to="/register">Register</Link></li>

            <li><Link to="/login">Login</Link></li>

            <li>
              <Link to="/business-register">
                Business Account
              </Link>
            </li>

          </>

        )}

        {/* Customer */}

        {userLoggedIn && (

          <>

            <li>
              <Link to="/salons">
                Browse Salons
              </Link>
            </li>

            <li>
              <Link to="/history">
                History
              </Link>
            </li>

            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>

          </>

        )}

        {/* Business */}

        {businessLoggedIn && !userLoggedIn && (

          <>

            <li>
              <Link to="/business-dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/business-bookings">
                Bookings
              </Link>
            </li>

            <li>
              <Link to="/manage-services">
                Services
              </Link>
            </li>

            <li>
              <Link to="/manage-gallery">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/business-profile">
                Profile
              </Link>
            </li>

          </>

        )}

      </ul>

    </nav>

  );

}

export default Navbar;