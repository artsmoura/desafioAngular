import { toast } from 'react-toastify';
import * as api from '../../../api/index';

export const ALL_USERS_LOAD = "ALL_USERS_LOAD";
export const UPDATE_SEARCH_USER = "UPDATE_SEARCH_USER";
export const SET_USER_SELECT = "SET_USER_SELECT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const listAllUsers = (poll) => async (dispatch) => {

    try {
        const { data } = poll.includes('Ambos') ? await api.getAllUsers() : poll.includes('Masculino') ? await api.getUsersMen() : await api.getUsersWom();
        dispatch({
            type: ALL_USERS_LOAD,
            payload: data
        });
        toast.success("Usuarios Listados");
    } catch (error) {
        toast.error("Erro ao listar usuarios");
    }
};

export const updateSearchUser = e => async (dispatch) => {
    dispatch({
        type: UPDATE_SEARCH_USER,
        payload: e
    });
};

export const setUserSelect = (vote) => async (dispatch) => {
    try {
        dispatch({
            type: SET_USER_SELECT,
            payload: vote
        });
    } catch (error) {
        toast.error("Aconteceu algum problema, tente novamente");
    }
};

export const login = (loginForm) => async (dispatch) => {
    try {
        const { data } = await api.login(loginForm);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
    } catch (error) {
        toast.error(error.response.data);
    }
};

export const logout = () => ({
    type: LOGOUT
});