import api from "./api";

export const getProfile =
async()=>{

    const response =
    await api.get(
        "accounts/me/"
    );

    return response.data;

};

export const updateProfile =
async(formData)=>{

    const response =
    await api.patch(

        "accounts/profile/update/",

        formData,

        {
            headers:{
                "Content-Type":
                "multipart/form-data"
            }
        }

    );

    return response.data;

};