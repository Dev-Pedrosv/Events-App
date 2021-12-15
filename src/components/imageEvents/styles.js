import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: 100vh;

    `

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    padding:0px 20px;

    @media (max-width:400px){
        padding:0px
    }
    .items{
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 5px 20px; 


        a{
            display: flex;
            text-decoration: none;
            align-items: center;
            transition:0.3s;
            cursor:pointer;
            opacity:0.7;

            i{  
            color:#c1c1c1;
            margin-right: 10px;
            font-size:20px
            }

            p{
                font-size:16px;
            }

            :hover{
            opacity: 1;}
        }
        p{
            font-size: 14px;
            color:#c1c1c1;   
        }   
    }

`


export const Events = styled.div`
    display: flex;
    width: 350px;
    height: 250px;
    
    background: linear-gradient(to bottom,transparent,#000),
        url(${props => props.background});
        background-position: center;
        background-size: 110%;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding:10px 20px;
    border-radius: 14px;
    transform: scale(0.9);
    transition: 0.3s;

    @media (max-width:350px){
        width: 320px;
    }


    &:hover{
        transform: scale(1);
    }

    p{
        color:#fff;
        font-size:24px;
    }

    i{
        font-size: 30px;
        color:#097511e6
    }

    button{
        background:transparent;
        border:none;
        outline: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p{
            font-size:18px;
            color:#097511e6

                }

        &:hover{
            cursor:pointer;
            opacity: 0.8;

        }

        &:active{
            opacity:0.6
        }
    }
`

export const ContainerData = styled.div`
    width: 50px;
    height: 50px;
    background:#fff;
    border-radius: 6px;
    border:none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .date-number{
        color:#000;
        font-size: 18px;
        font-weight: 700;


    }

    .date-string{
        color:#c1c1c1;
        font-size: 16px;
    }
`

export const Info = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;

    .info{
        color: #c1c1c1;
        font-size: 18px;
    }
`

