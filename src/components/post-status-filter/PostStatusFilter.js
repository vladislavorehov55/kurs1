import React from 'react';

import {Button} from 'reactstrap';
const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <Button color='info'>Все</Button>
            <button className='btn btn-info'>Все</button>
            <button className='btn btn-outline-secondary'>Понравилось</button>
        </div>
    )
}
export default PostStatusFilter