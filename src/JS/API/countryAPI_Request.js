import axios from 'axios';

const getCountryAPIData = async (country) => {
  try {
    const API_URL = `https://restcountries.com/v3.1/name/${country}`;
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    throw error.message;
  }
};

export default getCountryAPIData;
