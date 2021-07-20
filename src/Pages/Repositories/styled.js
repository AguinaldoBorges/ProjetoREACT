import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Countainer = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #abc;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`
export const ListItem = styled.li`
    margin: .5rem 0;
    background: #abc;
    color: #fff;
    padding: .5rem;
    border: 1px solid #aba;
`
export const LinkHome = styled(Link)`
width: 2rem;
margin: .5rem 0;
background: #abc;
color: #fff;
padding: .5rem;
text-decoration: none;
border: 1px solid #aba;
`
