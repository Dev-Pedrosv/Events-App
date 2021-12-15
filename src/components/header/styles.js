import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    background-color: #DE544C;
    height: 60px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    div{
        display:flex;
        align-items: center;
        justify-content: center;
    }


    button{
        border:none;
        background:transparent;

        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
    }

    i{
       
        font-size:50px;
        color:#fff;
        @media (max-width:350px){
        font-size: 30px;
    }
    }




  
`;

export const Logo = styled.img`

    width: 50px;
    height: 50px;

    @media (max-width:450px){
        width: 30px;
        height: 30px;
    }
`

export const H1 = styled.h1`
    color:#fff;
    font-size:46px;

    @media (max-width:600px){
        font-size:28px;
    }

    @media (max-width:450px){
        font-size:22px;
    }

    @media (max-width:400px){
        font-size:18px;
    }



`
export const Profile = styled.img`

    width: 50px;
    height: 50px;
    border-radius: 50%;
        @media (max-width:450px){
        width: 40px;
        height: 40px;
    }
`


export const Menu = styled.div`
      
    .showMenu{
        display: flex;
        flex-direction: column;
        width: 100px;
        background: #fff;
        position: relative;
        top: 98px;
        left: 110px;


        @media (max-width:380px)
        {
            width:80px;
        }
        @media (max-width:350px)
        {
            left:80px;
        }
        button{
            
            padding:9px 5px;
            width: 100%;
            transition: 0.2s ;
            &:hover{
                background:#ccc;
                cursor: pointer;
                color:#fff
            }
        }
    }
    .hiddenMenu{
        display:none;

    }

    .rotateIcon{
        transition: 0.3s;
        transform: rotate(180deg);
    }

    .icon{
        transition: 0.3s ;
        transform: rotate(360deg);
    }
`
