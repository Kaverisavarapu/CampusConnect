import {
    useState
}
from "react";

import {
    useNavigate
}
from "react-router-dom";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    createExperience
}
from "../../services/experienceService";

function AddExperience(){

    const navigate =
    useNavigate();

    const [
        formData,
        setFormData
    ] = useState({

        company_name:"",

        role_name:"",

        type:"INTERNSHIP",

        student_year:"",

        experience:""

    });

    const handleChange =
    (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    };

    const handleSubmit =
    async(e)=>{

        e.preventDefault();

        try{

            await createExperience(
                formData
            );

            alert(
                "Experience Posted Successfully"
            );

            navigate(
                "/student/experiences"
            );

        }

        catch(error){

            console.log(error);

            alert(
                "Failed to Post Experience"
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

        <StudentLayout>

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

                    Share Experience

                </h1>

                <p

                    style={{

                        color:"#64748B",

                        marginBottom:"30px"

                    }}

                >

                    Help other students by sharing your placement, internship or scholarship experience.

                </p>

                <form

                    onSubmit={handleSubmit}

                >

                    <label>

                        Company Name

                    </label>

                    <input

                        style={inputStyle}

                        type="text"

                        name="company_name"

                        value={
                            formData.company_name
                        }

                        onChange={handleChange}

                        placeholder="Google"

                    />

                    <label>

                        Role Name

                    </label>

                    <input

                        style={inputStyle}

                        type="text"

                        name="role_name"

                        value={
                            formData.role_name
                        }

                        onChange={handleChange}

                        placeholder="Software Engineer Intern"

                    />

                    <label>

                        Opportunity Type

                    </label>

                    <select

                        style={inputStyle}

                        name="type"

                        value={
                            formData.type
                        }

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

                        Student Year

                    </label>

                    <input

                        style={inputStyle}

                        type="number"

                        name="student_year"

                        value={
                            formData.student_year
                        }

                        onChange={handleChange}

                        placeholder="4"

                    />

                    <label>

                        Your Experience

                    </label>

                    <textarea

                        style={{

                            ...inputStyle,

                            minHeight:"180px",

                            resize:"vertical"

                        }}

                        name="experience"

                        value={
                            formData.experience
                        }

                        onChange={handleChange}

                        placeholder="Share interview rounds, preparation strategy, tips and overall experience..."

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

                        Post Experience

                    </button>

                </form>

            </div>

        </StudentLayout>

    );

}

export default AddExperience;