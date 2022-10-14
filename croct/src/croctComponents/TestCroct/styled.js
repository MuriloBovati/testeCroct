import styled from "styled-components";

export const ContainerTestCroct = styled.div`
    background-color: rgba(32,32,32,1);
    width: 600px;
    padding: 10px;
    margin: auto;
    border-radius: 10px;
    h1{
        padding-bottom: 10px;
        text-align: center;
    }    color: white;
`
export const ContainerButtonTesteCrock = styled.div`
    display: flex;
    width: 90%;
    height: 50px;
    margin: 10px auto;
    justify-content: center;
    button{
        padding: 10px;
        border: none;
        border-radius: 10px;
        font-size: 1em;
        font-weight: bold;
        transition: .1s;
        background-color: rgba(1, 79, 104, 1);
        &:active{
            background-color: rgba(68, 209, 254, 1);
            box-shadow: 0px 0px 5px rgba(68, 209, 254, 1);
        }
    }
` 

export const ContainerComandoCrock = styled.div`
    margin: auto;
    padding-left: 30px;
    span{
        color: white;
    }

    input{
        margin: 5px;
        width: 95%;
        border: none;
        padding: 10px;
        border-radius: 10px;
        font-size: 1em;
        line-height: 1em;
        transition: .5s;
        opacity: .7;
        &:focus{
            border: none;
            box-shadow: 0px 0px 5px rgba(68, 209, 254, 1);
            outline: none;
        }
    }
`
