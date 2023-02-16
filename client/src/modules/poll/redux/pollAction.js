import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as api from '../../../api/index';

export const UPDATE_POOL_CONTENT_CREATE = "UPDATE_POOL_CONTENT_CREATE";
export const CLEAR_POLL_INPUT = "CLEAR_POLL_INPUT";
export const POLL_CREATE_SUCCESS = "POLL_CREATE_SUCCESS";
export const POLL_DELETE_SUCCESS = "OLL_DELETE_SUCCESS";
export const ALL_POLLS_LOAD = "ALL_POLLS_LOAD";
export const SET_POLL_FOR_VOTE = "SET_POLL_FOR_VOTE";
export const SET_VOTE = "SET_VOTE";
export const CLEAR_POLL_FOR_VOTE = "CLEAR_POLL_FOR_VOTE";
export const VOTED_SUCCESS = "VOTED_SUCCESS";

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

export const deletePoll = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePoll(id);
        dispatch({
            type: POLL_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        toast.error('Erro ao deletar votação');
    }
};

export const listPolls = () => async (dispatch) => {
    try {
        const { data } = await api.getPolls();
        dispatch({
            type: ALL_POLLS_LOAD,
            payload: data
        });
        // toast.success("Usuarios Listados");
    } catch (error) {
        toast.error("Erro ao listar categorias");
    }
};

export const setPollForVote = (poll) => async (dispatch) => {
    try {
        dispatch({
            type: SET_POLL_FOR_VOTE,
            payload: poll
        });
    } catch (error) {
        toast.error("Aconteceu algum problema, tente novamente");
    }
};

export const setVote = (vote) => async (dispatch) => {
    try {
        dispatch({
            type: SET_VOTE,
            payload: vote
        });
    } catch (error) {
        toast.error("Aconteceu algum problema, tente novamente");
    }
};

export const clearPollForVote = () => (dispatch) => {
    dispatch({
        type: CLEAR_POLL_FOR_VOTE
    });
};

export const voteSubmit = (vote) => async (dispatch) => {
    console.log(vote);
    try {
        const { data } = await api.sendVote(vote);
        dispatch({
            type: VOTED_SUCCESS,
            payload: data
        });

        toast.success("Voto contabilizado!");
    } catch (error) {
        toast.error("Aconteceu algum problema, tente novamente");
    }
};