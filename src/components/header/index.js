import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { signOut } from "firebase/auth"
import { auth } from "../../firebase-config";


import * as C from './styles'
import Logo from '../../assets/img/logo.svg'
import Perfil from '../../assets/img/perfil.jpg'

function Header({ children, ...props }) {

    const navigate = useNavigate()


    const [menu, setMenu] = useState(false)

    function showMenu() {

        if (menu === true) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    function goMyTickets() {
        navigate('/tickets')

    }

    function goEvents() {
        navigate('/events')

    }

    function goNewEvents() {
        navigate('/newevents')

    }

    async function logout() {
        await signOut(auth)

        navigate('/')

    }

    return (
        <C.Container {...props} >

            <div>
                {children}
                <C.Logo src={Logo} alt="logo" />
                <C.H1>S-Events</C.H1>

            </div>


            <C.Menu>
                <div className={menu ? "showMenu" : "hiddenMenu"}>
                    <button onClick={goMyTickets}>My tickets</button>
                    <button onClick={goEvents}>Events</button>
                    <button onClick={goNewEvents}>New Events</button>
                    <button onClick={logout}>Logout</button>

                </div>
                <C.Profile src={Perfil} alt="perfil" />
                <button onClick={showMenu}><i className={menu ? 'bx bx-chevrons-down rotateIcon' : 'bx bx-chevrons-down icon'}></i></button>
            </C.Menu>




        </C.Container>
    )


}

export default Header

