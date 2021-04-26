import React from 'react'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated'

import PostsAndComments from "../PostsAndComments/PostsAndComments";
import SingleComment from "../../components/SingleComment";
import Modal from "../../components/UI/Modal/Modal";


configure({adapter: new Adapter()});

describe('<PostsAndComments />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PostsAndComments postID={1}/>)
    });

    it('should render <Modal /> element if there is an error', () => {
        wrapper.setState({error: {error: 'error'}});
        expect(wrapper.find(Modal)).toHaveLength(1)
    });

    it('should render multiple <SingleComment /> elements if there are comments AND postID is matching', () => {
        wrapper.setState({
            comments: [{postId: 1, body: 'Comment'}, {postId: 1, body: 'Comment2'}]
        });
        expect(wrapper.find(SingleComment)).toHaveLength(2)
    });

    it('should NOT render <SingleComment /> elements if there are comments BUT postID is NOT matching', () => {
        wrapper.setState({
            comments: [{postId: 2, body: 'Comment'}, {postId: 2, body: 'Comment2'}]
        });
        expect(wrapper.find(SingleComment)).toHaveLength(0)
    });

});