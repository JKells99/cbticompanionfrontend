import React from 'react';
import {useState} from "react";
import axios from "axios";
import {registerUser} from "../utils/apicalls.js";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role:'client'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            await registerUser(formData.username, formData.password, formData.role);
            setMessage("Registration successful! Please log in.");
            setFormData({
                username: '',
                password: '',
                role: 'client'
            });
        } catch (e) {
            console.log(e);
            setError( 'Registration failed');
        }
    };
    return (
        <div className="register-form">
            <h2>Register</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

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