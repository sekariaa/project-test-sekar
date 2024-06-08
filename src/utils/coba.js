// Import dependencies
const axios = require('axios');
const getProxyForUrl = require('proxy-from-env').getProxyForUrl;

// API endpoint URL
const apiUrl = 'https://suitmedia-backend.suitdev.com/api/ideas';

// Function to fetch data
const fetchData = async () => {
  try {
    // Parameters
    const params = {
      'page[number]': 1,
      'page[size]': 1,
      append: ['small_image', 'medium_image'],
      sort: '-published_at'
    };

    // Get proxy URL based on the API URL
    const proxyUrl = getProxyForUrl(apiUrl);

    // Set proxy configuration for axios
    const axiosConfig = proxyUrl ? { proxy: { host: proxyUrl } } : {};

    // Fetch data with proxy configuration using GET method
    const response = await axios.get(apiUrl, { params, ...axiosConfig });

    // Log the data
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call fetchData function
fetchData();
