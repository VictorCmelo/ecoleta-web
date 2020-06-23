import axios from 'axios';

const api = axios.create({
  baseURL:'https://server-ecoleta-base.herokuapp.com'
});

export default api;