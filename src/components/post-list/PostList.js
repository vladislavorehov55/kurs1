import React from 'react';
import PostListItem from '../post-list-item';
import './PostList.css'
const  PostList = ({posts}) => {
    return (
        <ul className='app-list list-group'>
            {
                posts.map((post,index) => {
                    return (
                        <li key={index} className='list-group-item' >
                            <PostListItem {...post}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default PostList