import React, { Component } from 'react'
import PropTypes from "prop-types";
import axios from "axios";

import './PostsAndComments.css';

import Aux from "../../hoc/Auxiliary";
import {loggin} from "../../assets/functions";

import SinglePost from "../../components/SinglePost";
import SingleComment from "../../components/SingleComment";
import Modal from "../../components/UI/Modal/Modal";

class PostsAndComments extends Component {

    state = {
        post: [],
        comments: [],
        error: "",
    };

    // Load post based on postID got from props
    loadSinglePost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postID}`)
            .then(response => {
                this.setState({
                    post: response.data,
                })
            })
            .catch(error => {
                this.setState({
                    error: error
                })
            })
    };

    // Load comment based on the post
    loadComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postID}/comments`)
            .then(response => {
                this.setState({
                    comments: response.data,
                })
            })
            .catch(error => {
                this.setState({
                    error: error
                })
            })
    };

    componentDidMount() {
        this.loadComments();
        this.loadSinglePost();
        loggin(this.props.message, this.props.component);
    }

    // callBackMethod to send id of selected post via props to parent
    callBackMethod = (id) => {
        this.props.clickID(id)
    };

    render() {
        const {postID} = this.props;
        const {comments, post, error} = this.state;

        if (error) {
            return (
                <Aux>
                    <Modal message={'Hello From '} component={'Modal'} show={error}>
                        <p>There was an error loading posts.</p>
                        <button onClick={this.componentDidMount}>Try again</button>
                    </Modal>
                </Aux>
            );
        }

        return (
            <Aux>
                <SinglePost click={() => this.callBackMethod(postID)} message={'Hello From '} component={'SinglePost'}
                            body={post.body}/>
                {/* eslint-disable-next-line array-callback-return */}
                {comments.map((comment, i) => {
                    if (postID === comment.postId) {
                        return <SingleComment message={'Hello From '} component={'Single Comment'} key={i}
                                              body={comment.body}/>
                    }
                })}
            </Aux>
        )
    }
}

PostsAndComments.propTypes = {
    postID: PropTypes.number.isRequired,
    clickID: PropTypes.func,
    message: PropTypes.string,
    component: PropTypes.string
};

export default PostsAndComments