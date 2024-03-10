import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://65eaf3b243ce16418932e4b3.mockapi.io`
});

// export const instance = await axios.create({
//   baseURL: `https://65eaf3b243ce16418932e4b3.mockapi.io/`,
//   params: {
//     // completed: false,
//     page: 1,
//     limit: 12,
//   },
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
