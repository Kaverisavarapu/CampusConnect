import api from "./api";

export const applyOpportunity =
async(opportunityId)=>{

    const response =
    await api.post(

        "applications/apply/",

        {
            opportunity:
            opportunityId
        }

    );

    return response.data;

};

export const getApplications =
async()=>{

    const response =
    await api.get(
        "applications/tracker/"
    );

    return response.data;

};

export const updateApplication =
async(id,status)=>{

    const response =
    await api.patch(

        `applications/update/${id}/`,

        {
            status:status
        }

    );

    return response.data;

};