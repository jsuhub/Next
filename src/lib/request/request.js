import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost/',
    timeout: 10000,
});

export default request