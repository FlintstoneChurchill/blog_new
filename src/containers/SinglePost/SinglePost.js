import React, {Component, Fragment} from 'react';
import './SinglePost.sass';
import {Link} from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import axios from "../../axios-blog";

class SinglePost extends Component {
    state = {
        post: null,
        error: null
    };
    componentWillMount() {
        const id = this.props.match.params.id;
        axios.get(`/posts/${id}`)
            .then(response => {
                let post = response.data;
                axios.get(`/users/${post.userId}`)
                    .then(user => {
                        post.author = user.data.name;
                        this.setState({post});
                    })
                    .catch(error => {
                        this.setState({error});
                    });
            });
    }

    render() {
        const post = this.state.post;
        if (!post) return <Spinner />;
        return (
            <Fragment>
                <section className="post post-full">
                <h1 className="post__title">{post.title}</h1>
                    <p className="post__author post__author-full_post">
                        Author: <Link
                                    className="post__author_link"
                                    to={`/users/${post.userId}`}
                                >
                                    {post.author}
                                </Link>
                    </p>
                    <p className="post__message">
                        {post.body}
                    </p>
                    <Button type="link" to="/">Go Back</Button>
                </section>
            </Fragment>
        );
    }
}

export default SinglePost;
