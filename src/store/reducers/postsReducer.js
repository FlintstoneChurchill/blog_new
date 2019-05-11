import {FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS, FETCH_SINGLE_POST_SUCCESS} from "../actions/actionTypes";

const initialState = {
    posts: [],
    singlePost: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts, singlePost: null};
        case FETCH_SINGLE_POST_SUCCESS:
            return {...state, singlePost: action.post};
        case FETCH_POSTS_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default reducer;
