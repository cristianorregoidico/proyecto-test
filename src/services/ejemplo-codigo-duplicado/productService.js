const fetch = require('node-fetch');

async function fetchProductData(productId) {
    const endpoint = `https://api.example.com/products/${productId}`;
    const method = 'GET';

    try {
        const response = await fetch(endpoint, { method });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
}

module.exports = { fetchProductData };