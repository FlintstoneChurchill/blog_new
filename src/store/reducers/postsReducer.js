import {FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    posts: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts};
        case FETCH_POSTS_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default reducer;
