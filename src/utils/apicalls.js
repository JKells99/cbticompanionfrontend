import axios from "axios";
const BASE_URL = 'http://localhost:8080/api';

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