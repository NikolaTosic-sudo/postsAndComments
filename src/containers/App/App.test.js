import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';

import App from './App'
import PostsAndComments from "../PostsAndComments/PostsAndComments";
import UserAndPosts from "../UserAndPosts/UserAndPosts";
import Modal from "../../components/UI/Modal/Modal";
import Loader from "../../components/UI/Loader/Loader";

configure({adapter: new Adapter()});

describe('<App />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should render <Loader /> element if there is a delay on retrieving data', () => {
    wrapper.setState({loading: true});
    expect(wrapper.find(Loader)).toHaveLength(1)
  });

  it('should render <Modal /> element if there is an error', () => {
    wrapper.setState({
      error: {error: 'error'},
      loading: false
    });
    expect(wrapper.find(Modal)).toHaveLength(1)
  });

  it('should render multiple <UserAndPosts /> elements if there is NOT a postID and there are users', () => {
    wrapper.setState({
      loading: false,
      postID: null,
      users: [{name: 'Lea', id: 1}, {name: 'Leo', id: 2}]
    });
    expect(wrapper.find(UserAndPosts)).toHaveLength(2)
  });

  it('should render <h1>No Posts by that User, check did you write it correctly</h1> if there is NOT a postID and there are NO users', () => {
    wrapper.setState({
      loading: false,
      postID: null,
      users: []
    });
    expect(wrapper.contains(<h1 style={{textAlign: 'center'}}>No Posts by that User, check did you write it correctly</h1>)).toEqual(true)
  });

  it('should render one <PostsAndComments /> element if there is a postID', () => {
    wrapper.setState({
      postID: 2,
      loading: false
    });
    expect(wrapper.find(PostsAndComments)).toHaveLength(1);
  })


});