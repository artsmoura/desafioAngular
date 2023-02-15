import { CLEAR_POLL_INPUT, POLL_CREATE_SUCCESS, UPDATE_POOL_CONTENT_CREATE } from "./pollAction";

const pollInicialState = {
    categoryName: "",
    genderPoll: "",
    description: ""
};

const inicialState = {
    poll: pollInicialState,
    polls: {}
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case UPDATE_POOL_CONTENT_CREATE:
            return {
                ...state,
                poll: {
                    ...state.poll,
                    [action.payload.target.name]: action.payload.target.value
                }
            };
        case POLL_CREATE_SUCCESS:
            return {
                ...state,
                polls: [
                    ...state.polls,
                    action.payload
                ]
            };
        case CLEAR_POLL_INPUT:
            return inicialState;
        default:
            return state;
    }
};