import { ALL_USERS_LOAD } from "./userAction";


const inicialState = {
    usuarios: []
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case ALL_USERS_LOAD:
            return {
                ...state,
                usuarios: action.payload
            };
        default:
            return state;
    }
};