import {
    useEffect,
    useState
}
from "react";

import {
    getNotifications,
    markAsRead
}
from "../services/notificationService";

function NotificationBell(){

    const [

        notifications,

        setNotifications

    ] = useState([]);

    const [

        open,

        setOpen

    ] = useState(false);

    useEffect(()=>{

        loadNotifications();

    },[]);

    const loadNotifications =
    async()=>{

        try{

            const data =
            await getNotifications();

            setNotifications(data);

        }

        catch(error){

            console.log(error);

        }

    };

    const unreadCount =

        notifications.filter(

            item => !item.is_read

        ).length;

    const handleRead =
    async(id)=>{

        try{

            await markAsRead(id);

            loadNotifications();

        }

        catch(error){

            console.log(error);

        }

    };

    return(

        <div

            style={{

                position:"relative"

            }}

        >

            <button

                onClick={()=>

                    setOpen(!open)

                }

                style={{

                    width:"48px",

                    height:"48px",

                    borderRadius:"50%",

                    border:"none",

                    background:"#EEF2FF",

                    color:"#4F46E5",

                    cursor:"pointer",

                    fontSize:"20px",

                    position:"relative"

                }}

            >

                🔔

                {

                    unreadCount > 0 && (

                        <span

                            style={{

                                position:"absolute",

                                top:"-5px",

                                right:"-5px",

                                width:"22px",

                                height:"22px",

                                borderRadius:"50%",

                                background:"#4F46E5",

                                color:"white",

                                fontSize:"12px",

                                display:"flex",

                                alignItems:"center",

                                justifyContent:"center"

                            }}

                        >

                            {unreadCount}

                        </span>

                    )

                }

            </button>

            {

                open && (

                    <div

                        style={{

                            position:"absolute",

                            top:"60px",

                            right:"0",

                            width:"340px",

                            background:"#FFFFFF",

                            borderRadius:"16px",

                            boxShadow:
                            "0 10px 35px rgba(0,0,0,.12)",

                            padding:"20px",

                            zIndex:"100"

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

                            <h3

                                style={{

                                    margin:0,

                                    color:"#4F46E5"

                                }}

                            >

                                Notifications

                            </h3>

                            <button

                                onClick={()=>

                                    setOpen(false)

                                }

                                style={{

                                    border:"none",

                                    background:"transparent",

                                    cursor:"pointer",

                                    fontSize:"18px"

                                }}

                            >

                                ✕

                            </button>

                        </div>

                        {

                            notifications.length === 0

                            ?

                            <p>

                                No Notifications

                            </p>

                            :

                            notifications.map(

                                (item)=>(

                                    <div

                                        key={item.id}

                                        onClick={()=>

                                            handleRead(

                                                item.id

                                            )

                                        }

                                        style={{

                                            background:

                                                item.is_read

                                                ?

                                                "#FFFFFF"

                                                :

                                                "#EEF2FF",

                                            padding:"12px",

                                            borderRadius:"12px",

                                            marginBottom:"10px",

                                            cursor:"pointer"

                                        }}

                                    >

                                        <h4

                                            style={{

                                                margin:"0 0 6px 0",

                                                color:"#1E293B"

                                            }}

                                        >

                                            {item.title}

                                        </h4>

                                        <p

                                            style={{

                                                margin:0,

                                                color:"#64748B",

                                                fontSize:"14px"

                                            }}

                                        >

                                            {item.message}

                                        </p>

                                    </div>

                                )

                            )

                        }

                    </div>

                )

            }

        </div>

    );

}

export default NotificationBell;