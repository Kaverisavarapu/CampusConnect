import {
    useEffect,
    useState
}
from "react";

import {
    getOpportunities,
    deleteOpportunity
}
from "../../services/opportunityService";

import {
    useNavigate
}
from "react-router-dom";

import AdminLayout
from "../../layouts/AdminLayout";

function ManageOpportunities(){

    const navigate =
    useNavigate();

    const [
        opportunities,
        setOpportunities
    ] = useState([]);

    useEffect(()=>{

        loadData();

    },[]);

    const loadData =
    async()=>{

        try{

            const data =
            await getOpportunities();

            setOpportunities(data);

        }

        catch(error){

            console.log(error);

        }

    };

    const handleDelete =
    async(id)=>{

        const confirmDelete =
        window.confirm(
            "Delete this opportunity?"
        );

        if(!confirmDelete){

            return;

        }

        try{

            await deleteOpportunity(id);

            loadData();

        }

        catch(error){

            console.log(error);

        }

    };

    return(

        <AdminLayout>

            <h1

                style={{

                    color:"#1E293B",

                    marginBottom:"30px"

                }}

            >

                Manage Opportunities

            </h1>

            {

                opportunities.map(

                    (item)=>(

                        <div

                            key={item.id}

                            style={{

                                background:"white",

                                padding:"25px",

                                borderRadius:"20px",

                                marginBottom:"20px",

                                boxShadow:
                                "0 10px 25px rgba(0,0,0,.05)"

                            }}

                        >

                            <h2

                                style={{

                                    marginBottom:"10px",

                                    color:"#1E293B"

                                }}

                            >

                                {item.title}

                            </h2>

                            <p

                                style={{

                                    color:"#64748B"

                                }}

                            >

                                {item.company}

                            </p>

                            <div

                                style={{

                                    display:"flex",

                                    gap:"10px",

                                    marginTop:"20px"

                                }}

                            >

                                <button

                                    onClick={()=>

                                        navigate(

                                            `/admin/edit/${item.id}`

                                        )

                                    }

                                    style={{

                                        background:"#EEF2FF",

                                        color:"#4F46E5",

                                        border:"none",

                                        padding:"10px 16px",

                                        borderRadius:"10px",

                                        cursor:"pointer"

                                    }}

                                >

                                    Edit

                                </button>

                                <button

                                    onClick={()=>

                                        handleDelete(

                                            item.id

                                        )

                                    }

                                    style={{

                                        background:"#FEE2E2",

                                        color:"#DC2626",

                                        border:"none",

                                        padding:"10px 16px",

                                        borderRadius:"10px",

                                        cursor:"pointer"

                                    }}

                                >

                                    Delete

                                </button>

                                <button

                                    onClick={()=>

                                        navigate(

                                            `/admin/results/${item.id}`

                                        )

                                    }

                                    style={{

                                        background:"#4F46E5",

                                        color:"white",

                                        border:"none",

                                        padding:"10px 16px",

                                        borderRadius:"10px",

                                        cursor:"pointer"

                                    }}

                                >

                                    View Results

                                </button>

                            </div>

                        </div>

                    )

                )

            }

        </AdminLayout>

    );

}

export default ManageOpportunities;