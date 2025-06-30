import React from 'react';
import { useState } from "react";
import axios from "axios";
import { registerUser } from "../utils/apicalls.js";

/**
 * Register component for user registration.
 * Allows users to register with a username, password, and role.
 * Displays success or error messages based on the registration outcome.
 */
const Register = () => {
    // State to manage form data (username, password, role)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'client'
    });

    // State to manage success message
    const [message, setMessage] = useState('');

    // State to manage error message
    const [error, setError] = useState('');

    /**
     * Handles input changes and updates the formData state.
     * @param {Object} e - The event object from the input field.
     */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Handles form submission, sends registration data to the server,
     * and updates the message or error state based on the response.
     * @param {Object} e - The event object from the form submission.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            // Call the registerUser API with form data
            await registerUser(formData.username, formData.password, formData.role);
            setMessage("Registration successful! Please log in.");
            // Reset form data after successful registration
            setFormData({
                username: '',
                password: '',
                role: 'client'
            });
        } catch (e) {
            console.log(e);
            setError('Registration failed');
        }
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            {/* Display success message if available */}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {/* Display error message if available */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Registration form */}
            <form onSubmit={handleSubmit} className={"registerForm"}>
                <div>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Role:</label><br />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="client">Client</option>
                        <option value="therapist">Therapist</option>
                    </select>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;