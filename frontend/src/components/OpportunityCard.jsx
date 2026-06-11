import {
    saveOpportunity
}
from "../services/opportunityService";

import {
    applyOpportunity
}
from "../services/applicationService";

function OpportunityCard({

    opportunity

}){

    const handleSave =
    async()=>{

        try{

            await saveOpportunity(
                opportunity.id
            );

            alert(
                "Saved Successfully"
            );

        }

        catch(error){

            console.log(error);

        }

    };

    const handleApply =
    async()=>{

        try{

            await applyOpportunity(
                opportunity.id
            );

            alert(
                "Application Submitted"
            );

        }

        catch(error){

            console.log(error);

        }

    };

    const deadlineDate =
    new Date(
        opportunity.deadline
    );

    const today =
    new Date();

    const daysLeft =
    Math.ceil(

        (
            deadlineDate -
            today
        )

        /

        (
            1000 *
            60 *
            60 *
            24
        )

    );

    return(

        <div

            style={{

                background:"#FFFFFF",

                padding:"25px",

                marginBottom:"20px",

                borderRadius:"20px",

                border:"1px solid #E2E8F0",

                boxShadow:
                "0 10px 30px rgba(0,0,0,.05)"

            }}

        >

            <div

                style={{

                    display:"flex",

                    justifyContent:"space-between",

                    alignItems:"center"

                }}

            >

                <div>

                    <h2

                        style={{

                            marginBottom:"8px",

                            color:"#1E293B"

                        }}

                    >

                        {opportunity.title}

                    </h2>

                    <p

                        style={{

                            color:"#64748B",

                            margin:0

                        }}

                    >

                        {opportunity.company}

                    </p>

                </div>

                <span

                    style={{

                        padding:"8px 14px",

                        borderRadius:"20px",

                        background:"#E0E7FF",

                        color:"#4F46E5",

                        fontWeight:"600"

                    }}

                >

                    {opportunity.type}

                </span>

            </div>

            <br/>

            <p>

                📅 Deadline:
                {" "}
                {opportunity.deadline}

            </p>

            <p>

                ⏰

                {" "}

                {

                    daysLeft > 0

                    ?

                    `${daysLeft} Days Left`

                    :

                    "Expired"

                }

            </p>

            <p

                style={{

                    color:"#475569",

                    lineHeight:"1.6"

                }}

            >

                {opportunity.description}

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

                        window.open(

                            opportunity.application_link,

                            "_blank"

                        )

                    }

                    style={{

                        padding:"10px 18px",

                        background:"#E0E7FF",

                        border:"none",

                        borderRadius:"10px",

                        cursor:"pointer"

                    }}

                >

                    View

                </button>

                <button

                    onClick={handleSave}

                    style={{

                        padding:"10px 18px",

                        background:"#EEF2FF",

                        border:"none",

                        borderRadius:"10px",

                        cursor:"pointer"

                    }}

                >

                    Save

                </button>

                <button

                    disabled={
                        daysLeft <= 0
                    }

                    onClick={handleApply}

                    style={{

                        padding:"10px 18px",

                        background:

                            daysLeft <= 0

                            ?

                            "#CBD5E1"

                            :

                            "#4F46E5",

                        color:"white",

                        border:"none",

                        borderRadius:"10px",

                        cursor:"pointer"

                    }}

                >

                    {

                        daysLeft <= 0

                        ?

                        "Expired"

                        :

                        "Apply"

                    }

                </button>

            </div>

        </div>

    );

}

export default OpportunityCard;