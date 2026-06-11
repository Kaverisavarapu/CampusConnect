import api from "./api";

export const changePassword =
async(

    oldPassword,
    newPassword

)=>{

    const response =
    await api.post(

        "accounts/change-password/",

        {

            old_password:
            oldPassword,

            new_password:
            newPassword

        }

    );

    return response.data;

};