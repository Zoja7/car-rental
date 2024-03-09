import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://65eaf3b243ce16418932e4b3.mockapi.io`
});