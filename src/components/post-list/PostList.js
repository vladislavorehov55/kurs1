import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from "reactstrap";

import './PostList.css'
const  PostList = ({posts, onDelete, onToggle}) => {
    return (
        <ListGroup className='app-list'>
            {
                posts.map(post => {

                    return (
                        <li key={post.id} className='list-group-item' >
                            <PostListItem post={post} onDelete={() => onDelete(post.id)}
                                          onToggle={onToggle}
                                          // onToggleImportant={() => onToggleImportant(id)}
                                          // onToggleLiked={() => onToggleLiked(id)}
                            />
                        </li>
                    )
                })
            }
        </ListGroup>
    )
}
export default PostList