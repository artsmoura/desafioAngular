import { toast } from 'react-toastify';
import * as api from '../../../api/index';

export const ALL_USERS_LOAD = "ALL_USERS_LOAD";

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