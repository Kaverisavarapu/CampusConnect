import {
    useState
}
from "react";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    changePassword
}
from "../../services/accountService";

function Settings(){

    const [
        oldPassword,
        setOldPassword
    ] = useState("");

    const [
        newPassword,
        setNewPassword
    ] = useState("");

    const [
        confirmPassword,
        setConfirmPassword
    ] = useState("");

    const handleChangePassword =
    async()=>{

        if(
            newPassword !==
            confirmPassword
        ){

            alert(
                "Passwords do not match"
            );

            return;

        }

        try{

            const data =
            await changePassword(

                oldPassword,

                newPassword

            );

            alert(
                data.message
            );

            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");

        }

        catch(error){

            console.log(error);

            alert(

                error.response?.data?.error ||

                "Failed to update password"

            );

        }

    };

    const inputStyle = {

        width:"100%",

        padding:"14px",

        border:"1px solid #CBD5E1",

        borderRadius:"12px",

        fontSize:"15px",

        outline:"none",

        marginBottom:"18px",

        boxSizing:"border-box"

    };

    return(

        <StudentLayout>

            <div

                style={{

                    maxWidth:"700px",

                    margin:"auto",

                    background:"white",

                    padding:"40px",

                    borderRadius:"24px",

                    boxShadow:
                    "0 10px 30px rgba(0,0,0,.05)"

                }}

            >

                <h1

                    style={{

                        color:"#1E293B",

                        marginBottom:"10px"

                    }}

                >

                    Settings

                </h1>

                <p

                    style={{

                        color:"#64748B",

                        marginBottom:"30px"

                    }}

                >

                    Update your account password securely.

                </p>

                <h3

                    style={{

                        color:"#334155",

                        marginBottom:"20px"

                    }}

                >

                    Change Password

                </h3>

                <input

                    type="password"

                    placeholder="Current Password"

                    value={oldPassword}

                    onChange={(e)=>

                        setOldPassword(
                            e.target.value
                        )

                    }

                    style={inputStyle}

                />

                <input

                    type="password"

                    placeholder="New Password"

                    value={newPassword}

                    onChange={(e)=>

                        setNewPassword(
                            e.target.value
                        )

                    }

                    style={inputStyle}

                />

                <input

                    type="password"

                    placeholder="Confirm Password"

                    value={confirmPassword}

                    onChange={(e)=>

                        setConfirmPassword(
                            e.target.value
                        )

                    }

                    style={inputStyle}

                />

                <button

                    onClick={
                        handleChangePassword
                    }

                    style={{

                        background:"#4F46E5",

                        color:"white",

                        border:"none",

                        padding:"14px 24px",

                        borderRadius:"12px",

                        fontSize:"15px",

                        fontWeight:"600",

                        cursor:"pointer"

                    }}

                >

                    Update Password

                </button>

            </div>

        </StudentLayout>

    );

}

export default Settings;