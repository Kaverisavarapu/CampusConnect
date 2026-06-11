import {
    useEffect,
    useState
}
from "react";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    getExperiences
}
from "../../services/experienceService";

import {
    Link
}
from "react-router-dom";

function Experiences(){

    const [
        experiences,
        setExperiences
    ] = useState([]);

    const [
        search,
        setSearch
    ] = useState("");

    useEffect(()=>{

        loadExperiences();

    },[]);

    const loadExperiences =
    async()=>{

        try{

            const data =
            await getExperiences();

            setExperiences(data);

        }

        catch(error){

            console.log(error);

        }

    };

    const filteredExperiences =

    experiences.filter(

        (exp)=>

            exp.company_name
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            exp.role_name
            ?.toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            exp.student_name
            ?.toLowerCase()
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

                    display:"flex",

                    justifyContent:"space-between",

                    alignItems:"center",

                    marginBottom:"30px"

                }}

            >

                <div>

                    <h1

                        style={{

                            color:"#1E293B",

                            marginBottom:"8px"

                        }}

                    >

                        Student Experiences

                    </h1>

                    <p

                        style={{

                            color:"#64748B"

                        }}

                    >

                        Learn from seniors who already went through the placement process.

                    </p>

                </div>

                <Link

                    to="/student/add-experience"

                >

                    <button

                        style={{

                            background:"#4F46E5",

                            color:"white",

                            border:"none",

                            padding:"12px 20px",

                            borderRadius:"12px",

                            cursor:"pointer",

                            fontWeight:"600"

                        }}

                    >

                        + Share Experience

                    </button>

                </Link>

            </div>

            {

                filteredExperiences.length > 0

                ?

                filteredExperiences.map(

                    (exp)=>(

                        <div

                            key={exp.id}

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

                            <div

                                style={{

                                    display:"flex",

                                    justifyContent:"space-between",

                                    alignItems:"center",

                                    marginBottom:"15px"

                                }}

                            >

                                <div>

                                    <h2

                                        style={{

                                            color:"#1E293B",

                                            marginBottom:"5px"

                                        }}

                                    >

                                        {exp.company_name}

                                    </h2>

                                    <h4

                                        style={{

                                            color:"#64748B",

                                            margin:0

                                        }}

                                    >

                                        {exp.role_name}

                                    </h4>

                                </div>

                                <span

                                    style={{

                                        background:"#EEF2FF",

                                        color:"#4F46E5",

                                        padding:"8px 14px",

                                        borderRadius:"20px",

                                        fontWeight:"600"

                                    }}

                                >

                                    {exp.type}

                                </span>

                            </div>

                            <div

                                style={{

                                    display:"flex",

                                    gap:"20px",

                                    marginBottom:"15px",

                                    color:"#64748B",

                                    flexWrap:"wrap"

                                }}

                            >

                                <span>

                                    👤 {exp.student_name}

                                </span>

                                <span>

                                    🎓 Year {exp.student_year}

                                </span>

                            </div>

                            <div

                                style={{

                                    borderTop:
                                    "1px solid #E2E8F0",

                                    paddingTop:"15px"

                                }}

                            >

                                <p

                                    style={{

                                        color:"#475569",

                                        lineHeight:"1.8",

                                        margin:0

                                    }}

                                >

                                    {exp.experience}

                                </p>

                            </div>

                        </div>

                    )

                )

                :

                <div

                    style={{

                        background:"white",

                        padding:"30px",

                        borderRadius:"20px",

                        textAlign:"center",

                        color:"#64748B"

                    }}

                >

                    No experiences found.

                </div>

            }

        </StudentLayout>

    );

}

export default Experiences;