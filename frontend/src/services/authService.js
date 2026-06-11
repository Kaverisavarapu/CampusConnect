import api from "./api";

export const loginUser = async (
    username,
    password
) => {

    const response = await api.post(
        "token/",
        {
            username,
            password
        }
    );

    return response.data;
};