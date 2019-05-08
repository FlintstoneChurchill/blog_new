import React from 'react';
import Post from "./Post/Post";

const PostList = props => {
    const posts = props.posts.map(post => (
        <Post
            key={post.id}
            title={post.title}
            message={post.body}
            author={post.author}
        />
    ));

    return (
        <section className="posts">
            {posts}
        </section>
    );
};

export default PostList;
