import axios from 'axios';

const userinstances = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 10000
});

export default userinstances;