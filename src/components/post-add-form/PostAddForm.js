import React from 'react';
import './PostAddForm.css'
const PostAddForm = ({onAdd}) => {
    return (
        <form className='button-panel d-flex'>
            <input type='text' placeholder='О чем вы думаете сейчас' className='form-control new-post-label'/>
            <button type='submit' className='btn btn-outline-secondary' onClick={() => onAdd('a')}>Добавить</button>
        </form>
    )
}
export default PostAddForm