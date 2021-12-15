import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display:flex;
    flex-direction: column;
    align-items: center;
    background: #292626;

    

`

export const ContainerTickets = styled.div`
    margin: 30px 0px ;
    min-height: 100vh;
    width: 80%;

    @media (max-width:1100px){
        flex-direction: column;
        display: flex;
        align-items: center;
    }

    h1{
        color:#fff

    }

`

export const ContainerTicket = styled.div`

    display: flex;
    margin-top: 30px;
    border-radius: 6px;
    padding: 10px;
    transition: 0.2s;
    justify-content: space-between;
    align-items: center;
    background:#777;

    &:hover{
        -webkit-box-shadow: 5px 5px 15px 10px rgba(204,204,204,0.4); 
    box-shadow: 5px 5px 15px 10px rgba(204,204,204,0.4);

    }

    @media (max-width:1100px){
        flex-direction: column;
        width: 300px;
    }
    

`

export const Image = styled.div`
    min-width: 275px;
    height: 180px;
    max-width: 280px;

    background:url(${props => props.image});
    background-position: center;
    background-size: 110%;
    

    @media (max-width:1100px){
        margin-bottom:15px;

    }

`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const Infos = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 20px;
    justify-content: space-around;
    margin: 10px 0px;


`

export const Name = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:22px;

    p{
        color:#fff;
    }

    span{
        color:#ccc;
        font-size:18px
    }


`

export const Info = styled.div` 
    width: 150px;
    font-size: 22px;
    color:#fff;


    .description{

        font-size:18px;
        color:#ccc;
        

    }

`

export const QR = styled.img`
    width: 200px;
    height: 200px;
    `


export const ButtonIcon = styled.button`

    height: 200px;
    width: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border:none;
    transition: 0.3s;

    &:hover{
        cursor: pointer;
        opacity:0.8
    }
    &:active{
        opacity:0.6
    }
    i{
        font-size:35px;
        color:#ff0000
    }

    @media (max-width:1100px){
        height: 50px;
    }




`

