import axios from "axios";
export const BASE_URL = "https://taskappcoursework.herokuapp.com";
const $api = axios.create({
    baseURL: BASE_URL
})
$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
    console.log(config);
    return config;
})
export default $api;