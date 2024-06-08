const axios = require("axios");
const getProxyForUrl = require("proxy-from-env").getProxyForUrl;

const apiUrl = "https://suitmedia-backend.suitdev.com/api/ideas";

const fetchData = async () => {
  try {
    const params = {
      "page[number]": 1,
      "page[size]": 1,
      append: ["small_image", "medium_image"],
      sort: "-published_at",
    };

    const proxyUrl = getProxyForUrl(apiUrl);
    const axiosConfig = proxyUrl ? { proxy: { host: proxyUrl } } : {};
    const response = await axios.get(apiUrl, { params, ...axiosConfig });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
