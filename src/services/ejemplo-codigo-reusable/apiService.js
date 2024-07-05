const fetch = require('node-fetch');

async function fetchData(endpoint, method) {
    try {
        const response = await fetch(endpoint, { method });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
}

module.exports = { fetchData };