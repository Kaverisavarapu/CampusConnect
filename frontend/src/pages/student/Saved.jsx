import {
    useEffect,
    useState
}
from "react";

import StudentLayout
from "../../layouts/StudentLayout";

import {
    getSavedOpportunities
}
from "../../services/opportunityService";

function Saved(){

    const [
        saved,
        setSaved
    ] = useState([]);

    const [
        search,
        setSearch
    ] = useState("");

    useEffect(()=>{

        loadSaved();

    },[]);

    const loadSaved =
    async()=>{

        try{

            const data =
            await getSavedOpportunities();

            setSaved(data);

        }

        catch(error){

            console.log(error);

        }

    };

    const filteredSaved =
    saved.filter(

        (item)=>

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

                    Saved Opportunities

                </h1>

                <p

                    style={{

                        color:"#64748B"

                    }}

                >

                    Opportunities you saved for later.

                </p>

            </div>

            {

                filteredSaved.length > 0

                ?

                filteredSaved.map(

                    (item)=>(

                        <div

                            key={item.id}

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

                                    marginBottom:"8px"

                                }}

                            >

                                {item.title}

                            </h2>

                            <p

                                style={{

                                    color:"#64748B",

                                    marginBottom:"15px"

                                }}

                            >

                                {item.company}

                            </p>

                            <div

                                style={{

                                    display:"inline-block",

                                    background:"#EEF2FF",

                                    color:"#4F46E5",

                                    padding:"8px 14px",

                                    borderRadius:"20px",

                                    fontWeight:"600",

                                    marginBottom:"15px"

                                }}

                            >

                                Saved
                            </div>

                            <p>

                                📅 Deadline:
                                {" "}
                                {item.deadline}

                            </p>

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

                    No saved opportunities.

                </div>

            }

        </StudentLayout>

    );

}

export default Saved;