import React from 'react';

const Post = props => {
    return (
        <article className="post">
            <h3 className="post__title">{props.title}</h3>
            <p className="post__message">{props.message}</p>
            <p className="post__author">{props.author}</p>
        </article>
    );
};

export default Post;
