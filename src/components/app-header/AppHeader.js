import React from 'react'
import './AppHeader.css'
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'};
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`
const AppHeader = ({likesCount, postsCount}) => {
    return (
        <Header as='a' colored>
            <h1>Vlad Orekhov</h1>
            <h2>{postsCount} записей, из них понравилось {likesCount}</h2>
        </Header>
    )
}

export default AppHeader