const fetch = require('node-fetch');

async function fetchUserData(userId) {
    const endpoint = `https://api.example.com/users/${userId}`;
    const method = 'GET';

    try {
        const response = await fetch(endpoint, { method });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

module.exports = { fetchUserData };