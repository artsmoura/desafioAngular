import { toast } from 'react-toastify';
import * as api from '../../../api/index';

export const ALL_USERS_LOAD = "ALL_USERS_LOAD";
export const UPDATE_SEARCH_USER = "UPDATE_SEARCH_USER";

export const listAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getAllUsers();
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