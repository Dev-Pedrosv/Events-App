import styled from "styled-components";


export const Footer = styled.div`
    margin-top: 20px;
    width: 100%;
    min-height: 50px;
    background-color: #DE544C;
    padding: 10px 20px;

    display:flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width:870px){
        flex-direction:column;
        gap:5px
    }

    @media (max-width:370px){
        text-align: center;
        font-size: 13px;
    }



    p{
        color:#fff;
    }

    a{
        text-decoration: none;
        color:#fff;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }


    


` 