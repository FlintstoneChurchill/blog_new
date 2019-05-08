import axios from "../../axios-blog";
import {FETCH_POSTS_SUCCESS} from "./actionTypes";

export const fetchPostsSuccess = (posts) => {
    return {type: FETCH_POSTS_SUCCESS, posts};
};
export const fetchPostsError = (error) => {
    return {type: FETCH_POSTS_SUCCESS, error};
};

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/posts')
            .then(response => {
                const posts = response.data;

                const promises = posts.map(post => {
                    return axios.get(`/users/${post.userId}`).then(user => {
                        return {...post, author: user.data.name};
                    });
                });

                return Promise.all(promises);

            })
            .then(posts => {
                dispatch(fetchPostsSuccess(posts));
            }).catch(err => {
                dispatch(fetchPostsError(err));
            });
    }
};
