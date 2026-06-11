import api from "./api";

export const createOpportunity =
async(data)=>{

    const response =
    await api.post(

        "opportunities/create/",

        data

    );

    return response.data;

};