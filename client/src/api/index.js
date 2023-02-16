import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getAllUsers = () => API.get("/users/allUsers");
export const getUsersMen = (user) => API.get(`/users/usersMas?name=${user}`);
export const getUsersWom = () => API.get("/users/usersFem");
export const login = (loginForm) => API.post("/users/login", loginForm);

export const getPolls = () => API.get("/poll");
export const createPoll = (poll) => API.post("/poll/", poll);
export const deletePoll = (id) => API.delete(`/poll/${id}`);
export const sendVote = (vote) => API.post("/poll/vote", vote);

