import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Registers a new user by sending their details to the server.
 *
 * @param {string} username - The username of the user to register.
 * @param {string} password - The password of the user to register.
 * @param {string} role - The role of the user (e.g., "client" or "therapist").
 * @returns {Promise<Object>} The response data from the server.
 * @throws Will throw an error if the registration request fails.
 */
export const registerUser = async (username, password, role) => {
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