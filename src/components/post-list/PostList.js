import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from "reactstrap";

import './PostList.css'
const  PostList = ({posts}) => {
    return (
        <ListGroup className='app-list'>
            {
                posts.map((post,index) => {
                    return (
                        <li key={index} className='list-group-item' >
                            <PostListItem {...post}/>
                        </li>
                    )
                })
            }
        </ListGroup>
    )
}
export default PostList