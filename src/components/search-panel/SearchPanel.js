import React from 'react';
import './SearchPanel.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e) {
        this.props.onUpdateSearch(e.target.value)
        this.setState({term: e.target.value})
    }
    render() {
        return (
            <input
                className='form-control search-input'
                type='text'
                placeholder='Поиск по записям'
                onChange={this.onUpdateSearch}
                value={this.state.term}
            />
        )
    }
}

export default SearchPanel