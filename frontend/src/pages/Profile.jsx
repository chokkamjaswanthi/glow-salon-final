import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");

        alert("Logged Out Successfully");

        navigate("/login");

    };

    const switchAccount = () => {

        navigate("/business-login");

    };

    const createBusiness = () => {

        navigate("/business-register");

    };

    return (

        <>

            <Navbar />

            <div className="dashboard">

                <div className="dashboard-box">

                    <h1>👤 My Profile</h1>

                    <h3>Email</h3>

                    <p>{localStorage.getItem("userEmail")}</p>

                    <button
                        onClick={createBusiness}
                    >
                        🏢 Create Business Account
                    </button>

                    <button
                        onClick={switchAccount}
                    >
                        🔄 Switch Account
                    </button>

                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        🚪 Logout
                    </button>

                </div>

            </div>

        </>

    );

}

export default Profile;