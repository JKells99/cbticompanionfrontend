import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (username, password,role) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/public/register`, {
            username,
            password,
            role
        });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}