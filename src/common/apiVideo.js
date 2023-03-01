import axios from 'axios';

const requestVideo = axios.create({
    baseURL: ' https://catfact.ninja/fact/',
});

// https://youtube-search-and-download.p.rapidapi.com/

// https://catfact.ninja/fact/

requestVideo.interceptors.request.use(
    (request) => {
        request.headers['X-RapidAPI-Key'] = process.env.REACT_APP_RAPID_API_KEY;
        request.headers['X-RapidAPI-Host'] =
            process.env.REACT_APP_RAPID_API_VIDEO_HOST;
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default requestVideo;
