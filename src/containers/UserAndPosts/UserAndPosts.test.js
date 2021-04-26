import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated'

import Modal from "../../components/UI/Modal/Modal";
import UserAndPosts from "./UserAndPosts";
import PostsAndComments from "../PostsAndComments/PostsAndComments";
import SingleComment from "../../components/SingleComment";


configure({adapter: new Adapter()});

describe('<UserAndPosts />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserAndPosts userID={1}/>)
    });

    it('should render <Modal /> element if there is an error', () => {
        wrapper.setState({error: {error: 'error'}});
        expect(wrapper.find(Modal)).toHaveLength(1)
    });

    it('should render multiple <PostsAndComments /> elements if there is a user AND there are posts', () => {
        wrapper.setState({
            user: 'Leanne Graham',
            posts: [{id: 1, body: 'Post'}, {id: 1, body: 'Post'}]
        });
        expect(wrapper.find(PostsAndComments)).toHaveLength(2)
    });

    it('should NOT render <PostsAndComment /> element if there are no posts', () => {
        wrapper.setState({
            user: 'Leanne Graham',
            posts: []
        });
        expect(wrapper.find(PostsAndComments)).toHaveLength(0)
    })

});