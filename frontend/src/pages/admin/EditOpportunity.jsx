import {
    useEffect,
    useState
}
from "react";

import {
    useParams,
    useNavigate
}
from "react-router-dom";

import {
    getOpportunities,
    updateOpportunity
}
from "../../services/opportunityService";

import AdminLayout
from "../../layouts/AdminLayout";

function EditOpportunity(){

    const { id } =
    useParams();

    const navigate =
    useNavigate();

    const [
        form,
        setForm
    ] = useState({

        title:"",
        company:"",
        description:""

    });

    useEffect(()=>{

        loadOpportunity();

    },[]);

    const loadOpportunity =
    async()=>{

        try{

            const opportunities =
            await getOpportunities();

            const selected =

            opportunities.find(

                item =>

                item.id === Number(id)

            );

            if(selected){

                setForm(selected);

            }

        }

        catch(error){

            console.log(error);

        }

    };

    const handleChange =
    (e)=>{

        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });

    };

    const handleSubmit =
    async()=>{

        try{

            await updateOpportunity(

                id,

                form

            );

            alert(
                "Updated Successfully"
            );

            navigate(
                "/admin/opportunities"
            );

        }

        catch(error){

            console.log(error);

            alert(
                "Update Failed"
            );

        }

    };

    const inputStyle = {

        width:"100%",

        padding:"14px",

        borderRadius:"12px",

        border:"1px solid #CBD5E1",

        marginTop:"8px",

        marginBottom:"20px",

        fontSize:"15px",

        boxSizing:"border-box"

    };

    return(

        <AdminLayout>

            <div

                style={{

                    maxWidth:"900px",

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

                    Edit Opportunity

                </h1>

                <p

                    style={{

                        color:"#64748B",

                        marginBottom:"30px"

                    }}

                >

                    Update opportunity details.

                </p>

                <label>

                    Opportunity Title

                </label>

                <input

                    style={inputStyle}

                    name="title"

                    value={form.title}

                    onChange={handleChange}

                />

                <label>

                    Company

                </label>

                <input

                    style={inputStyle}

                    name="company"

                    value={form.company}

                    onChange={handleChange}

                />

                <label>

                    Description

                </label>

                <textarea

                    style={{

                        ...inputStyle,

                        minHeight:"150px",

                        resize:"vertical"

                    }}

                    name="description"

                    value={form.description}

                    onChange={handleChange}

                />

                <button

                    onClick={
                        handleSubmit
                    }

                    style={{

                        background:"#4F46E5",

                        color:"white",

                        border:"none",

                        padding:"14px 28px",

                        borderRadius:"12px",

                        cursor:"pointer",

                        fontSize:"16px",

                        fontWeight:"600"

                    }}

                >

                    Save Changes

                </button>

            </div>

        </AdminLayout>

    );

}

export default EditOpportunity;