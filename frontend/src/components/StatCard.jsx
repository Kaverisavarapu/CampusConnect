function StatCard({

    title,
    value

}){

    return(

        <div
            style={{
                background:"white",
                padding:"25px",
                borderRadius:"20px",
                boxShadow:"0 10px 30px rgba(0,0,0,.08)"
            }}
        >

            <h4 style={{color:"#64748b"}}>
                {title}
            </h4>

            <h1>
                {value}
            </h1>

        </div>

    );

}

export default StatCard;