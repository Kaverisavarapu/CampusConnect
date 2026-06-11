import {
    useState
}
from "react";

import AdminLayout
from "../../layouts/AdminLayout";

import {
    createOpportunity
}
from "../../services/adminService";

function PostOpportunity(){

    const [
        formData,
        setFormData
    ] = useState({

        title:"",
        company:"",
        description:"",
        type:"INTERNSHIP",
        eligibility_years:[],
        deadline:"",
        application_link:""

    });

    const handleChange =
    (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    };

    const handleEligibility =
    (year)=>{

        let years =
        [...formData.eligibility_years];

        if(

            years.includes(year)

        ){

            years = years.filter(

                y => y !== year

            );

        }

        else{

            years.push(year);

        }

        setFormData({

            ...formData,

            eligibility_years:
            years

        });

    };

    const handleSubmit =
    async(e)=>{

        e.preventDefault();

        try{

            await createOpportunity(
                formData
            );

            alert(
                "Opportunity Posted Successfully"
            );

            setFormData({

                title:"",
                company:"",
                description:"",
                type:"INTERNSHIP",
                eligibility_years:[],
                deadline:"",
                application_link:""

            });

        }

        catch(error){

            console.log(error);

            alert(
                "Failed to Post Opportunity"
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

                    Post Opportunity

                </h1>

                <p

                    style={{

                        color:"#64748B",

                        marginBottom:"30px"

                    }}

                >

                    Create internships, jobs and scholarship opportunities.

                </p>

                <form

                    onSubmit={handleSubmit}

                >

                    <label>

                        Opportunity Title

                    </label>

                    <input

                        style={inputStyle}

                        name="title"

                        value={formData.title}

                        onChange={handleChange}

                        placeholder="Google Summer Internship"

                    />

                    <label>

                        Company

                    </label>

                    <input

                        style={inputStyle}

                        name="company"

                        value={formData.company}

                        onChange={handleChange}

                        placeholder="Google"

                    />

                    <label>

                        Description

                    </label>

                    <textarea

                        style={{

                            ...inputStyle,

                            minHeight:"140px",

                            resize:"vertical"

                        }}

                        name="description"

                        value={formData.description}

                        onChange={handleChange}

                        placeholder="Enter opportunity details..."

                    />

                    <label>

                        Opportunity Type

                    </label>

                    <select

                        style={inputStyle}

                        name="type"

                        value={formData.type}

                        onChange={handleChange}

                    >

                        <option value="INTERNSHIP">

                            Internship

                        </option>

                        <option value="JOB">

                            Job

                        </option>

                        <option value="SCHOLARSHIP">

                            Scholarship

                        </option>

                    </select>

                    <label>

                        Eligible Years

                    </label>

                    <div

                        style={{

                            display:"flex",

                            gap:"20px",

                            marginTop:"15px",

                            marginBottom:"25px",

                            flexWrap:"wrap"

                        }}

                    >

                        {[1,2,3,4].map(

                            (year)=>(

                                <label

                                    key={year}

                                >

                                    <input

                                        type="checkbox"

                                        checked={

                                            formData
                                            .eligibility_years
                                            .includes(year)

                                        }

                                        onChange={()=>

                                            handleEligibility(
                                                year
                                            )

                                        }

                                    />

                                    {" "}
                                    Year {year}

                                </label>

                            )

                        )}

                    </div>

                    <label>

                        Deadline

                    </label>

                    <input

                        style={inputStyle}

                        type="date"

                        name="deadline"

                        value={formData.deadline}

                        onChange={handleChange}

                    />

                    <label>

                        Application Link

                    </label>

                    <input

                        style={inputStyle}

                        name="application_link"

                        value={
                            formData.application_link
                        }

                        onChange={handleChange}

                        placeholder="https://..."

                    />

                    <button

                        type="submit"

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

                        Post Opportunity

                    </button>

                </form>

            </div>

        </AdminLayout>

    );

}

export default PostOpportunity;