import { toast } from 'react-toastify';
import * as api from '../../../api/index';

export const UPDATE_POOL_CONTENT_CREATE = "UPDATE_POOL_CONTENT_CREATE";
export const CLEAR_POLL_INPUT = "CLEAR_POLL_INPUT";
export const POLL_CREATE_SUCCESS = "POLL_CREATE_SUCCESS";

export const updatePollContentCreate = e => async (dispatch) => {
    dispatch({
        type: UPDATE_POOL_CONTENT_CREATE,
        payload: e
    });
};

export const clearPollInput = () => ({
    type: CLEAR_POLL_INPUT
});

export const createPoll = (poll) => async (dispatch) => {
    try {
        const { data } = await api.createPoll(poll);
        dispatch({
            type: POLL_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        toast.error('Erro ao criar votação');
    }
}; 