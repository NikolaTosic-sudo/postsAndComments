import React, { Component } from 'react'
import PropTypes from "prop-types";
import axios from "axios";

import './UserAndPosts.css'

import {logging} from "../../assets/functions";
import Aux from '../../hoc/Auxiliary'
import WithClass from "../../hoc/WithClass";

import PostsAndComments from "../PostsAndComments/PostsAndComments";
import Modal from "../../components/UI/Modal/Modal";

class UserAndPosts extends Component {
    state = {
        posts: [],
        error: "",
    };

    // Loading all posts from the site based on the user
    loadPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.userID}/posts`)
            .then(response => {
                this.setState({
                    posts: response.data,
                })
            })
            .catch(error => {
                this.setState({
                    error: error
                })
            })
    };
    componentDidMount(){
        this.loadPosts();
        logging(this.props.message, this.props.component);
    };

    render() {

        const { posts, error } = this.state;
        const { clickID, userName } = this.props;

        if(error) {
            return (
                <Aux>
                    <Modal message={'Hello From '} component={'Modal'} show={error}>
                        <p>There was an error loading posts.</p>
                        <button onClick={this.componentDidMount}>Try again</button>
                    </Modal>
                </Aux>
            );
        }

        // Mapping all posts based on the selected User
        const userPosts = posts.map((post, i) => {
                return (
                    <WithClass classes={'userAndPosts'} key={i}>
                        <Aux>
                            <h2>Post From {userName}</h2>
                            <div className={'line'}> </div>
                            <PostsAndComments message={'Hello From '} component={'PostsAndComments'} clickID={clickID} post={post} postID={post.id} />
                        </Aux>
                    </WithClass>
                )
        });

        return (
            <WithClass classes={'posts'}>
                {userPosts}
            </WithClass>
        )}
}

UserAndPosts.propTypes = {
    userID: PropTypes.number.isRequired,
    clickID: PropTypes.func,
    message: PropTypes.string,
    component: PropTypes.string
};

export default UserAndPosts