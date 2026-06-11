import AdminSidebar
from "../components/AdminSidebar";

function AdminLayout({

    children

}){

    return(

        <div

            style={{

                display:"flex",

                minHeight:"100vh",

                background:"#EEF2FF"

            }}

        >

            <AdminSidebar/>

            <div

                style={{

                    flex:1,

                    padding:"30px"

                }}

            >

                {children}

            </div>

        </div>

    );

}

export default AdminLayout;