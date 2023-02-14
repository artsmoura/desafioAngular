import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getAllUsers = () => API.get("/users/allUsers");
export const getUsersMen = () => API.get("/users/usersMas");
export const getUsersWom = () => API.get("/users/usersFem");