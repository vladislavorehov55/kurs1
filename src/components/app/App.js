import React from 'react'

import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './App.css'

import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
` // добавляет еще стили

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'That is good', important: false, like: false, id: 2},
                {label: 'I need a break', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }
    deleteItem(id) {
        const newData = this.state.data.filter(post => post.id !== id);
        this.setState({data: newData});
    }
    addItem(text) {
        const newPost = {label: text, important: false, id: this.maxId++};
        this.setState(prevState => {
            return {data: [...prevState.data, newPost]}
        })
    }

    onToggle(id, property) {
        const index = this.state.data.findIndex(post => post.id === id);
        const newItem = {...this.state.data[index], [property]: !this.state.data[index][property]};
        const prevItems = this.state.data.slice(0, index);
        const nextItems = this.state.data.slice(index + 1);
        this.setState({data: [...prevItems, newItem, ...nextItems]})
    }
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => item.label.indexOf(term) > -1)
    }
    filterPosts(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        }
        else {
            return items
        }
    }
    onUpdateSearch(term) {
        this.setState({term})
    }
    onFilterSelect(filter) {
        this.setState({filter})
    }
    render() {
        const {data, term, filter} = this.state;
        const likesCount = this.state.data.filter(post => post.like).length;
        const postsCount = this.state.data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader likesCount={likesCount} postsCount={postsCount}/>
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter}
                                      onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList posts={visiblePosts} onDelete={this.deleteItem}
                          onToggle={this.onToggle}
                />
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}

