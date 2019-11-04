import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dashplan.com.br/api-gfai/src/'
});

export default api;