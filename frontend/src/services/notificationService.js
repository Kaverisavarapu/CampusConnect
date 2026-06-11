import api from "./api";

export const getNotifications =
async()=>{

    const response =
    await api.get(
        "notifications/list/"
    );

    return response.data;

};

export const markAsRead =
async(id)=>{

    const response =
    await api.patch(

        `notifications/read/${id}/`,

        {
            is_read:true
        }

    );

    return response.data;

};