import React, { useState } from 'react';
import axios from 'axios';
import Resizer from 'react-image-file-resizer';

const AddMember = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        email: '',
        contact: '',
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            Resizer.imageFileResizer(
                file,
                800, // Max width
                800, // Max height
                'JPEG', // Output format
                70, // Quality (0-100)
                0, // Rotation
                (uri) => {
                    setFormData({ ...formData, profileImage: uri }); // Set resized image as Base64
                },
                'base64'
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/members', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('Member added successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to add member.');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>Add New Member</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="file"
                    name="profileImage"
                    onChange={handleFileChange}
                    style={styles.fileInput}
                />
                <button type="submit" style={styles.button}>
                    Add Member
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f0f4f8',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    form: {
        textAlign: 'center',
        padding: '40px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '90%',
    },
    heading: {
        fontSize: '28px',
        color: '#333333',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    fileInput: {
        margin: '10px 0',
        fontSize: '16px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default AddMember;