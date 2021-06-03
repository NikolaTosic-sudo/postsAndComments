import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import './App.css';
import Aux from '../../hoc/Auxiliary'
import WithClass from "../../hoc/WithClass";
import SearchBox from "../../components/UI/SearchBox/SearchBox";
import Loader from "../../components/UI/Loader/Loader";

import Modal from "../../components/UI/Modal/Modal";

import UserAndPosts from "../UserAndPosts/UserAndPosts";
import PostsAndComments from "../PostsAndComments/PostsAndComments";

class App extends Component{
    state = {
        users: [],
        loading: false,
        error: '',
        search: '',
        postID: null
    };

    // Loading all users from the site
    loadUsers = () => {
        this.setState({loading: true});
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                this.setState({
                    loading: false,
                    users: response.data
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                })
            })
    };

    componentDidMount(){
        this.loadUsers();
    };

    onSearchChange = (event) => {
        this.setState({search: event.currentTarget.value})
    };

    // Getting id of the selected post
    getId = (id) => {
        this.setState({
            postID: id
        });
    };

    // Clearing postID to redirect and render all posts
    clearState = () => {
        this.setState({
            postID: ''
        })
    };

    // When only one post rendered, onClick function should do nothing
    doesNothing = () => {
        return null
    };

    render(){
        const { loading, error, postID, search, users } = this.state;

        if(loading) {
            return <Loader />
        }

        if(error) {
            return (
                <Modal show={error}>
                    <p>There was an error loading posts.</p>
                    <button onClick={this.loadUsers}>Try again</button>
                </Modal>
            );
        }

        // Mapping users based on search input
        const posts = users.map((user, i) =>
            user.name.toLowerCase().includes(search.toLowerCase())
                ? <UserAndPosts clickID={this.getId} key={i} userID={user.id} userName={user.name} />
                : null)
            .filter(post => post !== null);

      return (
          <Router>
              <Switch>
                  <Route exact path='/'><Redirect to='/posts/' /></Route>
                  <Route path='/posts/'>
                      {
                          // Redirecting if there is a postID. Rendering all posts or if there are no posts letting user of the site know
                          postID
                            ? <Redirect to={`/post/${postID}`}/>
                            : <Aux>
                                  <SearchBox change={this.onSearchChange}/>
                                  <WithClass classes={'posts'}>
                                    {posts.length === 0 ? <h1 style={{textAlign: 'center'}}>No Posts by that User, check did you write it correctly</h1> : posts}
                                 </WithClass>
                              </Aux>
                      }
                  </Route>
                  <Route path={'/post/'}>
                      {
                          // Rendering a single post when it's selected, and having a button to go back by clearing state
                          postID
                              ? <Route path={`/post/${postID}`}>
                                      <Aux>
                                          <WithClass classes={'singlePost'}>
                                              <PostsAndComments postID={postID} clickID={this.doesNothing}/>
                                              <button className={'button'}><Link to='/posts' onClick={this.clearState}><span>Go Back</span></Link></button>
                                          </WithClass>
                                      </Aux>
                                </Route>
                              : <Redirect to='/posts/' />
                      }
                  </Route>
              </Switch>
          </Router>
      );
}}

export default App;
