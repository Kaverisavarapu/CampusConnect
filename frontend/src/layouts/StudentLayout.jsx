import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NotificationBell from "../components/NotificationBell";

function StudentLayout({

    children,
    search="",
    setSearch=()=>{}

}){

    return(

        <div

            style={{

                display:"flex",

                minHeight:"100vh",

                background:"#EEF2FF"

            }}

        >

            <Sidebar/>

            <div

                style={{

                    flex:1

                }}

            >

                <div

                    style={{

                        background:"#FFFFFF",

                        padding:"18px 25px",

                        display:"flex",

                        justifyContent:"space-between",

                        alignItems:"center",

                        borderBottom:
                        "1px solid #E2E8F0"

                    }}

                >

                    <Navbar

                        search={search}

                        setSearch={setSearch}

                    />

                    <NotificationBell/>

                </div>

                <div

                    style={{

                        padding:"30px"

                    }}

                >

                    {children}

                </div>

            </div>

        </div>

    );

}

export default StudentLayout;