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
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

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
    onToggleImportant(id) {


    }
    onToggleLiked(id) {
        const index = this.state.data.findIndex(post => post.id === id);
        const newItem = {...this.state.data[index], like: !this.state.data[index]};
    }


    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }


}

