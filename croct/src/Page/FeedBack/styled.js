import styled from "styled-components"

export const ContainerStyledFeedBack = styled.section`
    margin: auto;
    text-align: center;
    width: 80%;
    padding-top: 100px;
    transition: 1s;
    h1{
        font-size: 2em;
        padding-bottom: 10px;
    }

    h2{
        padding-bottom: 5px;
    }
    p{
        padding-bottom: 10px;
        font-size: 1em;
    }
    div{
        margin-bottom: 10px;
    }
`

export const CardFeedback = styled.div`
    display: inline-table;
    text-align: start;
    text-indent: 10px;
    margin: 10px;
    padding: 10px;
    width: 400px;
    height: 180px;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
    &:hover{
        box-shadow: 0px 0px 10px white;
    }
    h2{
        text-indent: 0px;
    }

`