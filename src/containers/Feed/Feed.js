import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../store/actions/actions";
import PostList from "../../components/PostList/PostList";
import Spinner from "../../components/UI/Spinner/Spinner";
import './Feed.sass';

class Feed extends Component {
    componentDidMount() {
        this.props.onFetchPosts();
    }

    render() {
        if (!this.props.posts.length) return <Spinner/>;
        return (
            <Fragment>
                <h1 className="main_title">Posts</h1>
                <PostList
                    posts={this.props.posts}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
