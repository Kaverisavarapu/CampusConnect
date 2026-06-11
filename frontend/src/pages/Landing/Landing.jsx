import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {

    const navigate = useNavigate();

    return (

        <div className="landing-container">

            <div className="glass-card">

                <h1 className="title">
                    CampusConnect
                </h1>

                <p className="subtitle">
                    Placement & Opportunity Management Portal
                </p>

                <p className="quote">
                    Connecting students with internships,
                    jobs, scholarships and campus opportunities.
                </p>

                <div className="button-group">

                    <button
                        className="student-btn"
                        onClick={() =>
                            navigate("/login/student")
                        }
                    >
                        Student Login
                    </button>

                    <button
                        className="admin-btn"
                        onClick={() =>
                            navigate("/login/admin")
                        }
                    >
                        Admin Login
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Landing;