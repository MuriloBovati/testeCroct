import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    background-image: linear-gradient(rgba(32, 32, 32, 1),rgba(32, 32, 32, .0));
    height: 90px;
    transition: .5s;
    position: fixed;

    &:hover{
        background-color: rgba(32, 32, 32, 1);
    }
`

export const NavStyled = styled.nav`
    margin-right: 100px;
    a{
        color: white;
        font-size: 1.2em;
        margin-left: 30px;
        text-decoration: none;
    }
`