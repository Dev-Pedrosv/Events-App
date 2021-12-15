import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display:flex;
    flex-direction: column;
    align-items: center;
    background: #292626;

    

`
export const ContainerItems = styled.div`
    margin: 30px 0px ;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    width: 80%;

    h1{
        color:#fff

    }

`
export const ContainerInfo = styled.div`
    width:100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap:10px;
    border: 1px solid #ccc;
    padding: 20px;
    align-items: center;
    justify-content: center;
    margin: 30px 0px 0px 0px;

`

export const Input = styled.input`

    width: 80%;
    height: 35px;
    outline:none;
    border: none;
    border-radius: 6px;
    background: #777;
    color:#fff;
    padding:10px 20px;
    font-size: 22px;

    &::placeholder{
        color:#fff
        
    }

`

export const Button = styled.button`

    margin-top: 20px;
    width: 200px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 6px;
    background: #000;
    color: #fff;
    font-size: 22px;
    transition: 0.3s;

    &:hover{
        opacity:0.8;
        cursor:pointer
    }

    &:active{
        opacity:0.6
    }
    
    `
