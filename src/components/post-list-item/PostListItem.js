import React from 'react';
import './PostListItem.css'


export default class PostListItem extends React.Component {
    render() {
        const {label, important, like, id} = this.props.post;
        const {onDelete} = this.props;
        const {onToggle} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        // console.log(this.props)
        return (
            <div className={classNames}>
                <span className='app-list-item-label' onClick={() => onToggle(id, 'like')}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm' onClick={() => onToggle(id, 'important')}>
                        <i className='fa fa-star'/>
                    </button>
                    <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <i className='fa fa-heart'/>
                </div>
            </div>
        )
    }
}

