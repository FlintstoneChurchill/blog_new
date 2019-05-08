import React from 'react';
import './Post.sass';
import {Link} from "react-router-dom";

const Post = props => {
    return (
        <article className="post">
            <h3 className="post__title">
                <Link
                    to={`/posts/${props.id}`}
                    className="post__title-link"
                >
                    {props.title}
                </Link>
            </h3>
            <p className="post__message">{props.message}</p>
            <p className="post__author">{props.author}</p>
        </article>
    );
};

export default Post;
