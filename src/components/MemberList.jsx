import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MembersList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/members');
                setMembers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2 style={styles.heading}>Team Members</h2>
                <div style={styles.cardContainer}>
                    {members.map((member) => (
                        <div key={member._id} style={styles.card}>
                            {/* Render the profile image */}
                            {member.profileImage && (
                                <img
                                    src={member.profileImage} // Use the Base64 string or file path
                                    alt={`${member.name}'s profile`}
                                    style={styles.image}
                                />
                            )}
                            <h3 style={styles.name}>{member.name}</h3>
                            <p style={styles.role}>{member.role}</p>
                            <Link to={`/member/${member._id}`} style={styles.link}>
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
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
        boxSizing: 'border-box',// Ensures all content is centered
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centers content horizontally
        width: '100%',
        maxWidth: '1200px', // Limits the content width for better readability
    },
    heading: {
        fontSize: '28px',
        color: '#333',
        marginBottom: '20px',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Centers the cards horizontally
        gap: '20px',
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    cardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    name: {
        fontSize: '20px',
        color: '#333',
        marginBottom: '5px',
    },
    role: {
        fontSize: '16px',
        color: '#777',
        marginBottom: '15px',
    },
    link: {
        textDecoration: 'none',
        color: '#007BFF',
        fontWeight: 'bold',
    },
};

export default MembersList;
