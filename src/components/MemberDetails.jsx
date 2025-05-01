import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/members/${id}`);
                setMember(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMember();
    }, [id]);

    if (!member) return <p style={styles.loading}>Loading...</p>;

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {member.profileImage && (
                    <img
                        src={member.profileImage} // Use Base64 or file path
                        alt={member.name}
                        style={styles.image}
                    />
                )}
                <h2 style={styles.name}>{member.name}</h2>
                <p style={styles.role}><strong>Role:</strong> {member.role}</p>
                <p style={styles.email}><strong>Email:</strong> {member.email}</p>
                <p style={styles.contact}><strong>Contact:</strong> {member.contact}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
        height: '100vh', // Ensures it covers the full viewport height
        width: '100vw', // Ensures it spans the full width of the viewport
        backgroundColor: '#f0f4f8',
        margin: 0, // Removes any default margin
        padding: 0, // Removes any default padding
        boxSizing: 'border-box',
    },
    card: {
        textAlign: 'center',
        padding: '40px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '90%',
    },
    image: {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    name: {
        fontSize: '24px',
        color: '#333333',
        marginBottom: '10px',
    },
    role: {
        fontSize: '18px',
        color: '#555555',
        marginBottom: '10px',
    },
    email: {
        fontSize: '16px',
        color: '#777777',
        marginBottom: '10px',
    },
    contact: {
        fontSize: '16px',
        color: '#777777',
    },
    loading: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#555555',
    },
};

export default MemberDetails;