export const UPDATE_POOL_CONTENT_CREATE = "UPDATE_POOL_CONTENT_CREATE";
export const CLEAR_POLL_INPUT = "CLEAR_POLL_INPUT";

export const updatePollContentCreate = e => async (dispatch) => {
    dispatch({
        type: UPDATE_POOL_CONTENT_CREATE,
        payload: e
    });
};

export const clearPollInput = () => ({
    type: CLEAR_POLL_INPUT
});