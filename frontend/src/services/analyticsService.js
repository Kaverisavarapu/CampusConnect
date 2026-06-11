import api from "./api";

export const getOpportunityResults =
async(id)=>{

    const response =
    await api.get(
        `analytics/opportunity/${id}/`
    );

    return response.data;

};