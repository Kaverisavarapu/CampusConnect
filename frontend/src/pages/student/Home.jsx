import {
    useEffect,
    useState
}
from "react";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    getOpportunities
}
from "../../services/opportunityService";

import OpportunityCard
from "../../components/OpportunityCard";

function Home(){

    const [
        opportunities,
        setOpportunities
    ] = useState([]);

    const [
        search,
        setSearch
    ] = useState("");

    const [
        filter,
        setFilter
    ] = useState("ALL");

    useEffect(()=>{

        fetchData();

    },[]);

    const fetchData =
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

    const filteredOpportunities =
    opportunities.filter((item)=>{

        const matchesSearch =

            item.title
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )

            ||

            item.company
            .toLowerCase()
            .includes(
                search.toLowerCase()
            );

        const matchesFilter =

            filter === "ALL"

            ||

            item.type === filter;

        return (

            matchesSearch

            &&

            matchesFilter

        );

    });

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

                        fontSize:"32px",

                        marginBottom:"8px"

                    }}

                >

                    Welcome Back 👋

                </h1>

                <p

                    style={{

                        color:"#64748B"

                    }}

                >

                    Discover internships, jobs and scholarships.

                </p>

            </div>

            <div

                style={{

                    display:"flex",

                    gap:"10px",

                    marginBottom:"30px",

                    flexWrap:"wrap"

                }}

            >

                <button

                    onClick={()=>
                        setFilter("ALL")
                    }

                    style={{

                        padding:"10px 20px",

                        border:"none",

                        borderRadius:"12px",

                        cursor:"pointer",

                        background:

                            filter==="ALL"

                            ?

                            "#4F46E5"

                            :

                            "#E0E7FF",

                        color:

                            filter==="ALL"

                            ?

                            "white"

                            :

                            "#4F46E5"

                    }}

                >

                    All

                </button>

                <button

                    onClick={()=>
                        setFilter("INTERNSHIP")
                    }

                    style={{

                        padding:"10px 20px",

                        border:"none",

                        borderRadius:"12px",

                        cursor:"pointer",

                        background:

                            filter==="INTERNSHIP"

                            ?

                            "#4F46E5"

                            :

                            "#E0E7FF",

                        color:

                            filter==="INTERNSHIP"

                            ?

                            "white"

                            :

                            "#4F46E5"

                    }}

                >

                    Internships

                </button>

                <button

                    onClick={()=>
                        setFilter("JOB")
                    }

                    style={{

                        padding:"10px 20px",

                        border:"none",

                        borderRadius:"12px",

                        cursor:"pointer",

                        background:

                            filter==="JOB"

                            ?

                            "#4F46E5"

                            :

                            "#E0E7FF",

                        color:

                            filter==="JOB"

                            ?

                            "white"

                            :

                            "#4F46E5"

                    }}

                >

                    Jobs

                </button>

                <button

                    onClick={()=>
                        setFilter("SCHOLARSHIP")
                    }

                    style={{

                        padding:"10px 20px",

                        border:"none",

                        borderRadius:"12px",

                        cursor:"pointer",

                        background:

                            filter==="SCHOLARSHIP"

                            ?

                            "#4F46E5"

                            :

                            "#E0E7FF",

                        color:

                            filter==="SCHOLARSHIP"

                            ?

                            "white"

                            :

                            "#4F46E5"

                    }}

                >

                    Scholarships

                </button>

            </div>

            {

                filteredOpportunities.length > 0

                ?

                filteredOpportunities.map(

                    (item)=>(

                        <OpportunityCard

                            key={item.id}

                            opportunity={item}

                        />

                    )

                )

                :

                <p>

                    No opportunities found.

                </p>

            }

        </StudentLayout>

    );

}

export default Home;