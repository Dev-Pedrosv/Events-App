import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    width: 100%;
    min-height: 100vh;
    background-color: #DE544C;
    flex-direction: column;
    align-items: center;

`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex:1;
    justify-content: center;
    padding: 20px;
    gap:20px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`
export const H1 = styled.h1`
    color:#fff;
    font-size:46px;
    margin-top:-50px;
    margin-bottom:60px;

`

export const Input = styled.input`

    width: 350px;
    height: 50px;
    border-radius: 6px;
    border:none;
    outline: none;
    background:#444;
    padding: 7px 0px 7px 12px;
    color:#fff;
    font-size:18px;

    &::placeholder{
    color: #fff;
    font-weight: 500;
    }
    
    @media (max-width:450px)
    {
        width: 250px;
        height: 40px;
        
    }


`

export const Button = styled.button`

    width: 250px;
    height: 50px;
    border-radius: 6px;
    border:none;
    outline: none;
    background:#000;
    color:#fff;
    font-size:18px;
    @media (max-width:450px)
    {
        width: 180px;
        height: 40px;
        
    }

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &:active{
        opacity:0.6;
    }


`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin-bottom:100px;
    
    a{
        text-decoration: none;
        color: #fff;
        opacity: 0.7;
        font-size: 18px;

        &:hover{
            opacity:1
        }
    }

    button{
        border: none;
        outline: none;
        background: transparent;
        color: #fff;
        opacity: 0.7;
        font-size: 18px;

        &:hover{
            opacity:1;
            cursor:pointer
        }

    }

    @media (max-width:450px)
    {
        width: 280px;

        a,button{
            font-size: 16px;

        }
        
    }




`