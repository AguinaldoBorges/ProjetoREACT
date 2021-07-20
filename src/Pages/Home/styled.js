import styled from 'styled-components';

export const Countainer = styled.div`
  width: 100vw;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`
export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`
export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 2rem;
    padding: 0 .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
export const Buttom = styled.button`
    height: 2.1rem;
    border: 1px solid #abc;
    background: #abc;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`

export const errorMsg = styled.span`
    display: block;
    font-size: .75rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`

export const CHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
  
  
`