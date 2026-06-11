import StudentLayout
from "../../layouts/StudentLayout";

import {
    useNavigate
}
from "react-router-dom";

function Dashboard(){

    const navigate =
    useNavigate();

    const cardStyle = {

        background:"white",

        padding:"25px",

        borderRadius:"20px",

        boxShadow:
        "0 10px 25px rgba(0,0,0,.05)",

        flex:"1",

        minWidth:"220px"

    };

    return(

        <StudentLayout>

            <div>

                <h1

                    style={{

                        color:"#1E293B",

                        marginBottom:"10px"

                    }}

                >

                    Welcome Back 👋

                </h1>

                <p

                    style={{

                        color:"#64748B",

                        marginBottom:"30px"

                    }}

                >

                    Manage your applications, opportunities and experiences from one place.

                </p>

            </div>

            <div

                style={{

                    display:"flex",

                    gap:"20px",

                    flexWrap:"wrap",

                    marginBottom:"30px"

                }}

            >

                <div style={cardStyle}>

                    <h2>

                        📋 Applications

                    </h2>

                    <p>

                        Track all your application statuses.

                    </p>

                    <button

                        onClick={()=>

                            navigate(
                                "/student/applications"
                            )

                        }

                        style={{

                            background:"#4F46E5",

                            color:"white",

                            border:"none",

                            padding:"10px 18px",

                            borderRadius:"10px",

                            cursor:"pointer"

                        }}

                    >

                        Open

                    </button>

                </div>

                <div style={cardStyle}>

                    <h2>

                        🔖 Saved

                    </h2>

                    <p>

                        View saved opportunities.

                    </p>

                    <button

                        onClick={()=>

                            navigate(
                                "/student/saved"
                            )

                        }

                        style={{

                            background:"#4F46E5",

                            color:"white",

                            border:"none",

                            padding:"10px 18px",

                            borderRadius:"10px",

                            cursor:"pointer"

                        }}

                    >

                        Open

                    </button>

                </div>

                <div style={cardStyle}>

                    <h2>

                        📝 Experiences

                    </h2>

                    <p>

                        Read and share placement experiences.

                    </p>

                    <button

                        onClick={()=>

                            navigate(
                                "/student/experiences"
                            )

                        }

                        style={{

                            background:"#4F46E5",

                            color:"white",

                            border:"none",

                            padding:"10px 18px",

                            borderRadius:"10px",

                            cursor:"pointer"

                        }}

                    >

                        Open

                    </button>

                </div>

            </div>

            <div

                style={{

                    background:"white",

                    padding:"30px",

                    borderRadius:"20px",

                    boxShadow:
                    "0 10px 25px rgba(0,0,0,.05)"

                }}

            >

                <h2

                    style={{

                        marginBottom:"15px",

                        color:"#1E293B"

                    }}

                >

                    CampusConnect

                </h2>

                <p

                    style={{

                        color:"#64748B",

                        lineHeight:"1.8"

                    }}

                >

                    Browse internships, jobs and scholarships,
                    save opportunities, track application progress,
                    update placement results and learn from senior
                    experiences—all in one platform.

                </p>

            </div>

        </StudentLayout>

    );

}

export default Dashboard;