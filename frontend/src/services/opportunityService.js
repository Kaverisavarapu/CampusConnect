import api from "./api";

export const getOpportunities =
async()=>{

    const response =
    await api.get(
        "opportunities/list/"
    );

    return response.data;

};
export const saveOpportunity =
async(opportunityId)=>{

    const response =
    await api.post(
        "opportunities/save/",
        {
            opportunity:
            opportunityId
        }
    );

    return response.data;
};

export const getSavedOpportunities =
async()=>{

    const response =
    await api.get(
        "opportunities/saved/"
    );

    return response.data;

};

export const deleteOpportunity =
async(id)=>{

    const response =
    await api.delete(
        `opportunities/delete/${id}/`
    );

    return response.data;

};

export const updateOpportunity =
async(id,data)=>{

    const response =
    await api.put(
        `opportunities/update/${id}/`,
        data
    );

    return response.data;

};
