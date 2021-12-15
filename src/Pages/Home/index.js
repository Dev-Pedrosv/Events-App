/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase-config'

import * as C from './styles'
import Logo from '../../assets/img/logo.png'


function Home() {

    const navigate = useNavigate()
    const inputEmail = useRef()
    const inputPassword = useRef()

    async function login() {

        const email = inputEmail.current.value
        const password = inputPassword.current.value


        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password

            )
            navigate('/events')


        } catch {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect email or password!',
            })
        }
    }


    function goCreateAccount() {

        navigate('/account')
    }

    return (
        <C.Container>

            <C.ContainerItems>
                <div>
                    <img src={Logo} alt="logo" />
                    <C.H1>S-Events</C.H1>
                </div>
                <C.Input ref={inputEmail} type="email" placeholder='Email'></C.Input>
                <C.Input ref={inputPassword} type="password" placeholder='Password'></C.Input>
                <C.Button onClick={login} type="button" value="Login">Login</C.Button>

            </C.ContainerItems>
            <C.Info>
                <a href="#">Forget password ?</a>
                <button onClick={goCreateAccount}>Create account</button>
            </C.Info>
        </C.Container>

    )
}


export default Home