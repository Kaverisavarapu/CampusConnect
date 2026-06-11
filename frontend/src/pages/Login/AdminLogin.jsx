import { useState }
from "react";

import {
    useNavigate
}
from "react-router-dom";

import {
    loginUser
}
from "../../services/authService";

import api
from "../../services/api";

import "./AdminLogin.css";

function AdminLogin(){

    const navigate =
    useNavigate();

    const [
        username,
        setUsername
    ] = useState("");

    const [
        password,
        setPassword
    ] = useState("");

    const handleLogin =
    async()=>{

        try{

            const data =
            await loginUser(

                username,

                password

            );

            localStorage.setItem(

                "access",

                data.access

            );

            localStorage.setItem(

                "refresh",

                data.refresh

            );

            const userResponse =
            await api.get(
                "accounts/me/"
            );

            if(

                userResponse.data.role

                !==

                "ADMIN"

            ){

                localStorage.removeItem(
                    "access"
                );

                localStorage.removeItem(
                    "refresh"
                );

                alert(
                    "Only Admins can login here"
                );

                return;

            }

            localStorage.setItem(

                "role",

                userResponse.data.role

            );

            navigate(
                "/admin/post"
            );

        }

        catch(error){

            console.log(error);

            alert(
                "Invalid Credentials"
            );

        }

    };

    return(

        <div

            className="login-container"

        >

            <div

                className="login-card"

            >

                <h1

                    className="login-title"

                >

                    Admin Login

                </h1>

                <p

                    className="login-subtitle"

                >

                    Manage opportunities and placements

                </p>

                <input

                    className="login-input"

                    type="text"

                    placeholder="Username"

                    value={username}

                    onChange={(e)=>

                        setUsername(
                            e.target.value
                        )

                    }

                />

                <input

                    className="login-input"

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e)=>

                        setPassword(
                            e.target.value
                        )

                    }

                />

                <button

                    className="login-btn"

                    onClick={
                        handleLogin
                    }

                >

                    Login

                </button>

                <div

                    className="back-home"

                    onClick={()=>

                        navigate("/")

                    }

                >

                    ← Back to Home

                </div>

            </div>

        </div>

    );

}

export default AdminLogin;