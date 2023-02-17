import { ALL_USERS_LOAD, LOGIN_SUCCESS, LOGOUT, SET_USER_SELECT, UPDATE_SEARCH_USER } from "./userAction";


const searchInicialState = {
    tipo: '',
    value: ''
};

const userLocalStorage = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : [];

const inicialState = {
    users: [],
    search: searchInicialState,
    user: userLocalStorage
};

export default (state = inicialState, { type, payload }) => {
    switch (type) {
        case ALL_USERS_LOAD:
            return {
                ...state,
                // users: [...payload]
                users: payload.map((user) => ({
                    ...user,
                    select: false
                }))
            };
        case UPDATE_SEARCH_USER:
            return {
                ...state,
                search: {
                    ...state.search,
                    value: payload.target.value
                }
            };
        case SET_USER_SELECT:
            return {
                ...state,
                users: state.users.map((user) => {
                    return ({
                        ...user,
                        select: user.cod_usuario === payload.cod_usuario ? true : false
                    });
                })
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('profile', JSON.stringify({ ...payload }));
            return {
                ...state,
                user: payload

            };
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                user: []
            };
        default:
            return state;
    }
};