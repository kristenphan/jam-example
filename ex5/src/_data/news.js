const axios = require("axios");
const countries = require("./countries.json")
require('dotenv').config();

async function getNews(country) {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`);
    return {
        "country": country,
        "articles": response.data.articles
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = async function() {
    
    // axios rest api call returns a Promise
    var newsPromises = countries.map(getNews);

    Promise.all(newPromises)
        .then()
};
