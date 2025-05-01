import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Welcome to the Team Management App</h2>
                <p style={styles.text}>Manage your team members efficiently and effectively.</p>
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
        boxSizing: 'border-box', // Ensures padding and borders are included in width/height
    },
    card: {
        textAlign: 'center',
        padding: '40px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '90%', // Makes the card responsive on smaller screens
    },
    heading: {
        fontSize: '28px', // Slightly larger font for better visibility
        color: '#333333',
        marginBottom: '20px',
    },
    text: {
        fontSize: '18px', // Slightly larger font for better readability
        color: '#555555',
    },
};

export default Home;