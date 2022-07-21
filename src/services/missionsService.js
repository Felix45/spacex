import http from '../lib/http';

const fetchMissions = () => http.get('/missions');

export default fetchMissions;
