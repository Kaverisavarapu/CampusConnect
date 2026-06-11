function Navbar({

    search,

    setSearch

}){

    return(

        <div

            style={{

                display:"flex",

                alignItems:"center",

                width:"100%"

            }}

        >

            <input

                value={search}

                onChange={(e)=>

                    setSearch(

                        e.target.value

                    )

                }

                placeholder="Search opportunities..."

                style={{

                    width:"420px",

                    padding:"14px 20px",

                    borderRadius:"14px",

                    border:"1px solid #DDE3F0",

                    background:"#F8FAFF",

                    outline:"none",

                    fontSize:"15px",

                    transition:"0.3s"

                }}

            />

        </div>

    );

}

export default Navbar;