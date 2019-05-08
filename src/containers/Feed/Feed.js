import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../../store/actions/actions";
import PostList from "../../components/PostList/PostList";
import Spinner from "../../components/Layout/Spinner/Spinner";

class Feed extends Component {
    componentDidMount() {
        this.props.onFetchPosts();
    }

    render() {
        return (
            <Fragment>
                {
                    !this.props.posts.length ?
                        <Spinner/> :
                        <PostList
                            posts={this.props.posts}
                        />
                }
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
