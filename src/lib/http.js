import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v3';

const http = axios.create({ baseURL: API_BASE_URL });

export default http;
