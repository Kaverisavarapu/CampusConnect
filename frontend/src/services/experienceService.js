import api from "./api";

export const getExperiences =
async()=>{

    const response =
    await api.get(
        "experiences/list/"
    );

    return response.data;

};

export const createExperience =
async(data)=>{

    const response =
    await api.post(
        "experiences/create/",
        data
    );

    return response.data;

};