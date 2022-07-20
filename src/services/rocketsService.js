import http from '../lib/http';

const fetchRockets = () => http.get('/rockets');

export default fetchRockets;
