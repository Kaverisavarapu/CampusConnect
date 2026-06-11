import {
    useEffect,
    useState
}
from "react";

import {
    useParams
}
from "react-router-dom";

import {
    saveAs
}
from "file-saver";

import {
    getOpportunityResults
}
from "../../services/analyticsService";

import AdminLayout
from "../../layouts/AdminLayout";

function AdminResults(){

    const { id } =
    useParams();

    const [
        data,
        setData
    ] = useState(null);

    const [
        search,
        setSearch
    ] = useState("");

    const [
        statusFilter,
        setStatusFilter
    ] = useState("ALL");

    useEffect(()=>{

        loadResults();

    },[]);

    const loadResults =
    async()=>{

        try{

            const response =

            await getOpportunityResults(
                id
            );

            setData(
                response
            );

        }

        catch(error){

            console.log(error);

        }

    };

    if(!data){

        return(

            <AdminLayout>

                <h2>

                    Loading...

                </h2>

            </AdminLayout>

        );

    }

    const filteredStudents =

    data.students.filter(

        (student)=>{

            const matchesSearch =

                student.student_id
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )

                ||

                student.username
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                );

            const matchesStatus =

                statusFilter === "ALL"

                ||

                student.status ===
                statusFilter;

            return (

                matchesSearch

                &&

                matchesStatus

            );

        }

    );

    const downloadCSV = ()=>{

        let csv =

        "Student ID,Username,Branch,Year,Status\n";

        filteredStudents.forEach(

            (student)=>{

                csv +=

                `${student.student_id},` +

                `${student.username},` +

                `${student.branch},` +

                `${student.year},` +

                `${student.status}\n`;

            }

        );

        const blob =

        new Blob(

            [csv],

            {

                type:
                "text/csv;charset=utf-8;"

            }

        );

        saveAs(

            blob,

            `${data.opportunity}.csv`

        );

    };

    return(

        <AdminLayout>

            <h1

                style={{

                    color:"#1E293B",

                    marginBottom:"30px"

                }}

            >

                {data.opportunity}

            </h1>

            <div

                style={{

                    display:"grid",

                    gridTemplateColumns:
                    "repeat(4,1fr)",

                    gap:"20px",

                    marginBottom:"30px"

                }}

            >

                <div

                    style={{

                        background:"white",

                        padding:"20px",

                        borderRadius:"15px",

                        textAlign:"center",

                        boxShadow:
                        "0 10px 25px rgba(0,0,0,.05)"

                    }}

                >

                    <h3>

                        Applied

                    </h3>

                    <h1>

                        {data.applied}

                    </h1>

                </div>

                <div

                    style={{

                        background:"white",

                        padding:"20px",

                        borderRadius:"15px",

                        textAlign:"center",

                        boxShadow:
                        "0 10px 25px rgba(0,0,0,.05)"

                    }}

                >

                    <h3>

                        Shortlisted

                    </h3>

                    <h1>

                        {data.shortlisted}

                    </h1>

                </div>

                <div

                    style={{

                        background:"white",

                        padding:"20px",

                        borderRadius:"15px",

                        textAlign:"center",

                        boxShadow:
                        "0 10px 25px rgba(0,0,0,.05)"

                    }}

                >

                    <h3>

                        Selected

                    </h3>

                    <h1>

                        {data.selected}

                    </h1>

                </div>

                <div

                    style={{

                        background:"white",

                        padding:"20px",

                        borderRadius:"15px",

                        textAlign:"center",

                        boxShadow:
                        "0 10px 25px rgba(0,0,0,.05)"

                    }}

                >

                    <h3>

                        Rejected

                    </h3>

                    <h1>

                        {data.rejected}

                    </h1>

                </div>

            </div>

            <div

                style={{

                    display:"flex",

                    gap:"15px",

                    marginBottom:"20px"

                }}

            >

                <input

                    type="text"

                    placeholder="Search Student ID or Username"

                    value={search}

                    onChange={(e)=>

                        setSearch(
                            e.target.value
                        )

                    }

                    style={{

                        flex:1,

                        padding:"12px",

                        border:"1px solid #CBD5E1",

                        borderRadius:"10px",

                        outline:"none"

                    }}

                />

                <select

                    value={statusFilter}

                    onChange={(e)=>

                        setStatusFilter(
                            e.target.value
                        )

                    }

                    style={{

                        padding:"12px",

                        border:"1px solid #CBD5E1",

                        borderRadius:"10px"

                    }}

                >

                    <option value="ALL">
                        All Statuses
                    </option>

                    <option value="APPLIED">
                        Applied
                    </option>

                    <option value="SHORTLISTED">
                        Shortlisted
                    </option>

                    <option value="SELECTED">
                        Selected
                    </option>

                    <option value="REJECTED">
                        Rejected
                    </option>

                </select>

                <button

                    onClick={downloadCSV}

                    style={{

                        background:"#4F46E5",

                        color:"white",

                        border:"none",

                        padding:"12px 20px",

                        borderRadius:"10px",

                        cursor:"pointer",

                        fontWeight:"600"

                    }}

                >

                    Download CSV

                </button>

            </div>

            <table

                style={{

                    width:"100%",

                    background:"white",

                    borderCollapse:"collapse",

                    borderRadius:"15px",

                    overflow:"hidden",

                    boxShadow:
                    "0 10px 25px rgba(0,0,0,.05)"

                }}

            >

                <thead>

                    <tr>

                        <th style={{
                            background:"#4F46E5",
                            color:"white",
                            padding:"15px"
                        }}>
                            Student ID
                        </th>

                        <th style={{
                            background:"#4F46E5",
                            color:"white",
                            padding:"15px"
                        }}>
                            Username
                        </th>

                        <th style={{
                            background:"#4F46E5",
                            color:"white",
                            padding:"15px"
                        }}>
                            Branch
                        </th>

                        <th style={{
                            background:"#4F46E5",
                            color:"white",
                            padding:"15px"
                        }}>
                            Year
                        </th>

                        <th style={{
                            background:"#4F46E5",
                            color:"white",
                            padding:"15px"
                        }}>
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        filteredStudents.map(

                            (student,index)=>(

                                <tr
                                    key={index}
                                >

                                    <td style={{
                                        padding:"15px",
                                        borderBottom:"1px solid #E2E8F0"
                                    }}>
                                        {student.student_id}
                                    </td>

                                    <td style={{
                                        padding:"15px",
                                        borderBottom:"1px solid #E2E8F0"
                                    }}>
                                        {student.username}
                                    </td>

                                    <td style={{
                                        padding:"15px",
                                        borderBottom:"1px solid #E2E8F0"
                                    }}>
                                        {student.branch}
                                    </td>

                                    <td style={{
                                        padding:"15px",
                                        borderBottom:"1px solid #E2E8F0"
                                    }}>
                                        {student.year}
                                    </td>

                                    <td style={{
                                        padding:"15px",
                                        borderBottom:"1px solid #E2E8F0",
                                        fontWeight:"600",
                                        color:"#4F46E5"
                                    }}>
                                        {student.status}
                                    </td>

                                </tr>

                            )

                        )

                    }

                </tbody>

            </table>

        </AdminLayout>

    );

}

export default AdminResults;