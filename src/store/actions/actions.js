import {FETCH_POSTS_SUCCESS} from "./actionTypes";

export const fetchPostsSuccess = (posts) => {
    return {type: FETCH_POSTS_SUCCESS, posts};
};
