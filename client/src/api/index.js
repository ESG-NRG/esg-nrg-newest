import axios from 'axios';

const baseURL = process.env.REACT_APP_API || 'http://localhost:8000/';

const token = window.localStorage.getItem('token');

let resetHead = () => {
  return {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },
  };
};

const API = axios.create({
  withCredentials: true,
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

const actions = {
  signUp: async (user) => {
    let res = await API.post('/auth/signup', user, resetHead());
    window.localStorage.setItem('token', res?.data?.token);
    return res;
  },
  logIn: async (user) => {
    let res = await API.post('/auth/login', user, resetHead());
    window.localStorage.setItem('token', res?.data?.token);
    return res;
  },
  logOut: async () => {
    window.localStorage.removeItem('token');
    return await API.get('/logout', resetHead());
  },
};

// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error(error?.response?.data);
//     if (error?.response?.data.name !== 'JsonWebTokenError')
//       console.error(String(error?.response?.data.message));
//     else console.error('Please signup or login');
//   }
// );

export default actions;
