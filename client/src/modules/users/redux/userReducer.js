import { ALL_USERS_LOAD, UPDATE_SEARCH_USER } from "./userAction";


const searchInicialState = {
    tipo: '',
    value: ''
};

const inicialState = {
    users: {},
    search: searchInicialState
};

export default (state = inicialState, { type, payload }) => {
    switch (type) {
        case ALL_USERS_LOAD:
            return {
                ...state,
                users: payload
            };
        case UPDATE_SEARCH_USER:
            return {
                ...state,
                search: {
                    ...state.search,
                    value: payload.target.value
                }
            };
        default:
            return state;
    }
};