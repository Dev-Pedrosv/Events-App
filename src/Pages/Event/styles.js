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
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Image = styled.div`
    margin-top: 50px;
    display: flex;
    width: 600px;
    height: 450px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    padding:20px;


    background: linear-gradient(to bottom,transparent,#000),
        url(${props => props.background});
        background-position:center;
        background-size: 110%;


    @media (max-width:600px){
        width:100%
    }

    @media (max-width:500px){
        height: 300px;
    }

`

export const ContainerData = styled.div`
    width: 70px;
    height: 70px;
    background:#fff;
    border-radius: 6px;
    border:none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width:500px){
        width: 50px;
        height: 50px;
    }

    .date-number{
        color:#000;
        font-size: 22px;
        font-weight: 700;

        @media (max-width:500px){
            font-size: 16px;
    }


    }

    .date-string{
        color:#c1c1c1;
        font-size: 20px;

        @media (max-width:500px){
            font-size: 16px;
    }
}
`

export const Info = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;

    .info{
        color: #fff;
        font-size: 24px;

        @media (max-width:500px){
            font-size: 16px;
    }
    }
`


export const ContainerInfo = styled.div`
    width:600px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:600px){
        width:100%
    }

`

export const Adress = styled.div`
    display: flex;
    padding:20px;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    div,a{
        display:flex;
        align-items: center;
        gap:12px;
        text-decoration:none;
        transition: 0.3s;

    }  
        @media (max-width:500px){
            gap:8px;
    }

    a:hover{
        opacity:0.8
        
    }

    a:active{
        opacity:0.6
    }

    p,i{
        font-size: 20px;
        color: #ccc;
        @media (max-width:500px){
            font-size: 16px;
    }
    }

`

export const Description = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 20px;

    p,i{
        font-size: 20px;
        color: #ccc;
        @media (max-width:500px){
            font-size: 16px;
    }
    }

`

export const Button = styled.button`

    width: 300px;
    height: 40px;
    border:none;
    outline: none;
    border-radius:10px;

    background-color: #DE544C;

    font-size:18px;
    color:#fff;
    @media (max-width:500px){
        width: 250px;
    }

    &:hover{
        cursor:pointer;
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }


`

export const About = styled.div`

    width: 100%;
    padding:20px;

    h2{
        color:#fff;
        margin-bottom:25px
    }

    p{
        color: #fff;
    }


`