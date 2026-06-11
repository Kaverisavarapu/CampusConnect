import api from "./api";

export const getCurrentUser =
async()=>{

    const response =
    await api.get(
        "accounts/me/"
    );

    return response.data;

};