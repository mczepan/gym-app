import axios from 'axios';

const request = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/',
});

// https://exercisedb.p.rapidapi.com/

// https://catfact.ninja/fact/

request.interceptors.request.use(
    (request) => {
        request.headers['X-RapidAPI-Key'] = process.env.REACT_APP_RAPID_API_KEY;
        request.headers['X-RapidAPI-Host'] =
            process.env.REACT_APP_RAPID_API_HOST;
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;
