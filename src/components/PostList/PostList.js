import React from 'react';
import Post from "./Post/Post";

const PostList = props => {
    const posts = props.posts.map(post => (
        <Post

        />
    ));

    return (
        <section className="posts">

        </section>
    );
};

export default PostList;
