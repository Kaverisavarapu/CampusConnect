import {
    useEffect,
    useState
}
from "react";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    getApplications,
    updateApplication
}
from "../../services/applicationService";

function Applications(){

    const [
        applications,
        setApplications
    ] = useState([]);

    const [
        search,
        setSearch
    ] = useState("");

    useEffect(()=>{

        loadApplications();

    },[]);

    const loadApplications =
    async()=>{

        try{

            const data =
            await getApplications();

            setApplications(data);

        }

        catch(error){

            console.log(error);

        }

    };

    const handleStatusUpdate =
    async(id,status)=>{

        try{

            await updateApplication(
                id,
                status
            );

            alert(
                "Status Updated Successfully"
            );

            loadApplications();

        }

        catch(error){

            console.log(error);

            alert(
                "Update Failed"
            );

        }

    };

    const filteredApplications =
    applications.filter(

        (app)=>

            app.opportunity_title
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            app.company
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )

    );

    return(

        <StudentLayout

            search={search}

            setSearch={setSearch}

        >

            <div

                style={{

                    marginBottom:"30px"

                }}

            >

                <h1

                    style={{

                        color:"#1E293B",

                        marginBottom:"8px"

                    }}

                >

                    Application Tracker

                </h1>

                <p

                    style={{

                        color:"#64748B"

                    }}

                >

                    Track and update your application progress.

                </p>

            </div>

            {

                filteredApplications.map(

                    (app)=>(

                        <div

                            key={app.id}

                            style={{

                                background:"white",

                                padding:"25px",

                                marginBottom:"20px",

                                borderRadius:"20px",

                                border:
                                "1px solid #E2E8F0",

                                boxShadow:
                                "0 10px 25px rgba(0,0,0,.05)"

                            }}

                        >

                            <h2

                                style={{

                                    color:"#1E293B",

                                    marginBottom:"10px"

                                }}

                            >

                                {app.opportunity_title}

                            </h2>

                            <p

                                style={{

                                    color:"#64748B",

                                    marginBottom:"20px"

                                }}

                            >

                                {app.company}

                            </p>

                            <label>

                                Current Status

                            </label>

                            <br/><br/>

                            <select

                                value={app.status}

                                onChange={(e)=>{

                                    const updated =

                                    applications.map(

                                        (item)=>

                                            item.id === app.id

                                            ?

                                            {

                                                ...item,

                                                status:
                                                e.target.value

                                            }

                                            :

                                            item

                                    );

                                    setApplications(
                                        updated
                                    );

                                }}

                                style={{

                                    width:"250px",

                                    padding:"12px",

                                    borderRadius:"12px",

                                    border:
                                    "1px solid #CBD5E1"

                                }}

                            >

                                <option value="APPLIED">
                                    Applied
                                </option>

                                <option value="IN_PROGRESS">
                                    In Progress
                                </option>

                                <option value="SHORTLISTED">
                                    Shortlisted
                                </option>

                                <option value="REJECTED">
                                    Rejected
                                </option>

                                <option value="SELECTED">
                                    Selected
                                </option>

                            </select>

                            <br/><br/>

                            <button

                                onClick={()=>

                                    handleStatusUpdate(

                                        app.id,

                                        app.status

                                    )

                                }

                                style={{

                                    background:"#4F46E5",

                                    color:"white",

                                    border:"none",

                                    padding:
                                    "12px 20px",

                                    borderRadius:"12px",

                                    cursor:"pointer"

                                }}

                            >

                                Save Status

                            </button>

                        </div>

                    )

                )

            }

        </StudentLayout>

    );

}

export default Applications;