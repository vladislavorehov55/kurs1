import React from 'react';
import './PostListItem.css'


export default class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant() {
        this.setState(prevState => ({important: !prevState.important}));
    }
    onLike() {
        this.setState(prevState => ({like: !prevState.like}));
    }
    render() {
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <div className={classNames}>
                <span className='app-list-item-label' onClick={this.onLike}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm' onClick={this.onImportant}>
                        <i className='fa fa-star'/>
                    </button>
                    <button type='button' className='btn-trash btn-sm'>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <i className='fa fa-heart'/>
                </div>
            </div>
        )
    }
}

