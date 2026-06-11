import {
    useEffect,
    useState
}
from "react";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    getProfile,
    updateProfile
}
from "../../services/profileService";

function Profile(){

    const [
        profile,
        setProfile
    ] = useState(null);

    const [
        editing,
        setEditing
    ] = useState(false);

    const [
        branch,
        setBranch
    ] = useState("");

    const [
        year,
        setYear
    ] = useState("");

    const [
        photo,
        setPhoto
    ] = useState(null);

    useEffect(()=>{

        loadProfile();

    },[]);

    const loadProfile =
    async()=>{

        try{

            const data =
            await getProfile();

            setProfile(data);

            setBranch(
                data.branch || ""
            );

            setYear(
                data.year || ""
            );

        }

        catch(error){

            console.log(error);

        }

    };

    const handleSave =
    async()=>{

        try{

            const formData =
            new FormData();

            formData.append(
                "branch",
                branch
            );

            formData.append(
                "year",
                year
            );

            if(photo){

                formData.append(
                    "profile_photo",
                    photo
                );

            }

            await updateProfile(
                formData
            );

            alert(
                "Profile Updated Successfully"
            );

            setEditing(false);

            loadProfile();

        }

        catch(error){

            console.log(error);

            alert(
                "Profile Update Failed"
            );

        }

    };

    if(!profile){

        return(

            <StudentLayout>

                Loading...

            </StudentLayout>

        );

    }

    return(

        <StudentLayout>

            <div

                style={{

                    maxWidth:"800px",

                    margin:"auto",

                    background:"white",

                    borderRadius:"24px",

                    padding:"40px",

                    boxShadow:
                    "0 10px 30px rgba(0,0,0,.05)"

                }}

            >

                <div

                    style={{

                        textAlign:"center",

                        marginBottom:"40px"

                    }}

                >

                    <div

                        style={{

                            width:"120px",

                            height:"120px",

                            borderRadius:"50%",

                            background:"#EEF2FF",

                            display:"flex",

                            alignItems:"center",

                            justifyContent:"center",

                            margin:"auto",

                            fontSize:"50px",

                            color:"#4F46E5"

                        }}

                    >

                        👤

                    </div>

                    <h1

                        style={{

                            marginTop:"20px",

                            color:"#1E293B"

                        }}

                    >

                        {profile.username}

                    </h1>

                    <p

                        style={{

                            color:"#64748B"

                        }}

                    >

                        {profile.email}

                    </p>

                </div>

                <div

                    style={{

                        display:"grid",

                        gridTemplateColumns:
                        "1fr 1fr",

                        gap:"20px"

                    }}

                >

                    <div>

                        <label>

                            Student ID

                        </label>

                        <input

                            value={
                                profile.student_id
                            }

                            disabled

                            style={{

                                width:"100%",

                                padding:"12px",

                                marginTop:"8px",

                                borderRadius:"12px",

                                border:
                                "1px solid #CBD5E1"

                            }}

                        />

                    </div>

                    <div>

                        <label>

                            Role

                        </label>

                        <input

                            value={
                                profile.role
                            }

                            disabled

                            style={{

                                width:"100%",

                                padding:"12px",

                                marginTop:"8px",

                                borderRadius:"12px",

                                border:
                                "1px solid #CBD5E1"

                            }}

                        />

                    </div>

                    <div>

                        <label>

                            Branch

                        </label>

                        <input

                            value={branch}

                            disabled={!editing}

                            onChange={(e)=>

                                setBranch(
                                    e.target.value
                                )

                            }

                            style={{

                                width:"100%",

                                padding:"12px",

                                marginTop:"8px",

                                borderRadius:"12px",

                                border:
                                "1px solid #CBD5E1"

                            }}

                        />

                    </div>

                    <div>

                        <label>

                            Year

                        </label>

                        <input

                            value={year}

                            disabled={!editing}

                            onChange={(e)=>

                                setYear(
                                    e.target.value
                                )

                            }

                            style={{

                                width:"100%",

                                padding:"12px",

                                marginTop:"8px",

                                borderRadius:"12px",

                                border:
                                "1px solid #CBD5E1"

                            }}

                        />

                    </div>

                </div>

                {

                    editing && (

                        <div

                            style={{

                                marginTop:"25px"

                            }}

                        >

                            <label>

                                Profile Photo

                            </label>

                            <br/><br/>

                            <input

                                type="file"

                                onChange={(e)=>

                                    setPhoto(
                                        e.target.files[0]
                                    )

                                }

                            />

                        </div>

                    )

                }

                <div

                    style={{

                        marginTop:"30px"

                    }}

                >

                    {

                        !editing

                        ?

                        <button

                            onClick={()=>

                                setEditing(true)

                            }

                            style={{

                                background:"#4F46E5",

                                color:"white",

                                border:"none",

                                padding:
                                "12px 24px",

                                borderRadius:"12px",

                                cursor:"pointer"

                            }}

                        >

                            Edit Profile

                        </button>

                        :

                        <button

                            onClick={
                                handleSave
                            }

                            style={{

                                background:"#4F46E5",

                                color:"white",

                                border:"none",

                                padding:
                                "12px 24px",

                                borderRadius:"12px",

                                cursor:"pointer"

                            }}

                        >

                            Save Profile

                        </button>

                    }

                </div>

            </div>

        </StudentLayout>

    );

}

export default Profile;