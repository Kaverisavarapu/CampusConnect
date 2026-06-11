import {
    Link,
    useNavigate,
    useLocation
}
from "react-router-dom";

function AdminSidebar(){

    const navigate =
    useNavigate();

    const location =
    useLocation();

    const handleLogout = ()=>{

        const confirmLogout =

        window.confirm(

            "Are you sure you want to logout?"

        );

        if(!confirmLogout){

            return;

        }

        localStorage.removeItem(
            "access"
        );

        localStorage.removeItem(
            "refresh"
        );

        localStorage.removeItem(
            "role"
        );

        navigate("/");
    };

    const menuItem = (path)=>({

        display:"block",

        padding:"14px 18px",

        marginBottom:"10px",

        borderRadius:"14px",

        textDecoration:"none",

        fontWeight:"500",

        transition:"0.3s",

        background:

            location.pathname === path

            ?

            "#4F46E5"

            :

            "transparent",

        color:

            location.pathname === path

            ?

            "#FFFFFF"

            :

            "#334155"

    });

    return(

        <div

            style={{

                width:"260px",

                background:"#FFFFFF",

                padding:"25px",

                minHeight:"100vh",

                boxShadow:
                "0 8px 30px rgba(0,0,0,.05)",

                display:"flex",

                flexDirection:"column"

            }}

        >

            <h1

                style={{

                    color:"#4F46E5",

                    marginBottom:"40px"

                }}

            >

                CareerConnect

            </h1>

            <Link
                to="/admin/post"
                style={menuItem(
                    "/admin/post"
                )}
            >

                Post Opportunity

            </Link>

            <Link
                to="/admin/opportunities"
                style={menuItem(
                    "/admin/opportunities"
                )}
            >

                Manage Opportunities

            </Link>

            <div
                style={{
                    flex:1
                }}
            />

            <button

                onClick={handleLogout}

                style={{

                    width:"100%",

                    padding:"14px",

                    border:"none",

                    borderRadius:"14px",

                    background:"#4F46E5",

                    color:"white",

                    cursor:"pointer",

                    fontSize:"15px",

                    fontWeight:"600"

                }}

            >

                Logout

            </button>

        </div>

    );

}

export default AdminSidebar;