import styled from 'styled-components'


export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

    display:flex;
    flex-direction: column;
    align-items: center;
    background: #292626;

    .container{
        width: 100%;
        
    }
`


export const Date = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background: transparent;
    color:white;
    margin-top:20px;
    padding:0 20px;

    @media (max-width:400px){
        h1{
        font-size: 24px;
        }
    }


    p{  
        margin:5px 0 20px 10px;
        color:#c1c1c1;
    }
    


`