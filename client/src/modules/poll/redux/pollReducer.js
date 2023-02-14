import { CLEAR_POLL_INPUT, UPDATE_POOL_CONTENT_CREATE } from "./pollAction";

const pollInicialState = {
    categoryName: "",
    genderPoll: "",
    inicialPollDate: "",
    endPollDate: "",
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
        case CLEAR_POLL_INPUT:
            return inicialState;
        default:
            return state;
    }
};