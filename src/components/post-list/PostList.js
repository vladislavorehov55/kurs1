import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from "reactstrap";

import './PostList.css'
const  PostList = ({posts, onDelete,onToggleImportant, onToggleLiked}) => {
    return (
        <ListGroup className='app-list'>
            {
                posts.map(post => {
                    const {id, ...itemProps} = post
                    return (
                        <li key={id} className='list-group-item' >
                            <PostListItem {...itemProps} onDelete={() => onDelete(id)}
                                          onToggleImportant={() => onToggleImportant(id)}
                                          onToggleLiked={() => onToggleLiked(id)}
                            />
                        </li>
                    )
                })
            }
        </ListGroup>
    )
}
export default PostList