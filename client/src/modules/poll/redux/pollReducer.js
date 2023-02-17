import { ALL_POLLS_LOAD, CLEAR_POLL_FOR_VOTE, CLEAR_POLL_INPUT, POLL_CREATE_SUCCESS, POLL_DELETE_SUCCESS, RESULT_LOAD_SUCCESS, SET_POLL_FOR_VOTE, SET_VOTE, UPDATE_POOL_CONTENT_CREATE, VOTED_SUCCESS } from "./pollAction";

const pollInicialState = {
    categoryName: "",
    genderPoll: "",
    description: ""
};

const inicialState = {
    poll: pollInicialState,
    polls: [],
    pollForVote: [],
    vote: {},
    results: []
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
        case ALL_POLLS_LOAD:
            return {
                ...state,
                polls: [...action.payload]
            };
        case SET_POLL_FOR_VOTE:
            return {
                ...state,
                pollForVote: action.payload
            };
        case SET_VOTE:
            return {
                ...state,
                vote: action.payload
            };
        case CLEAR_POLL_FOR_VOTE:
            return {
                ...state,
                pollForVote: [],
                vote: {}
            };
        case VOTED_SUCCESS:
            return {
                ...state,
                poll: pollInicialState,
                pollForVote: [],
                vote: {},
                results: []
            };
        case RESULT_LOAD_SUCCESS:
            return {
                ...state,
                results: [...action.payload]
            };
        case CLEAR_POLL_INPUT:
            return inicialState;
        case POLL_DELETE_SUCCESS:
            return {
                ...state,
                polls: state.polls.filter(poll => poll.id !== action.payload)
            };
        default:
            return state;
    }
};