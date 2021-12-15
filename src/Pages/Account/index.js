/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Swal from 'sweetalert2'


import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from '../../firebase-config'

import * as C from './styles'
import Logo from '../../assets/img/logo.png'


function Account() {


    const schema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(6, "Minimum 6 digits").required("Password is required"),
        confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('password')], "Passwords must match"),
    }).required();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()


    async function onSubmit(userData) {
        const email = userData.email
        const password = userData.password

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your account has been created',
                showConfirmButton: true,
            })

            navigate('/')

        } catch {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your email is already being used',
                showConfirmButton: true,
            })


        }

    }

    function goHome() {

        navigate('/')
    }

    return (
        <C.Container>

            <C.ContainerItems>
                <div>
                    <img src={Logo} alt="logo" />
                    <C.H1>S-Events</C.H1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <C.Input type="text" {...register("name", { required: true })} placeholder='Name'></C.Input>
                        <span>{errors.name?.message}</span>
                    </div>
                    <div>
                        <C.Input
                            type="text" {...register("email", { required: true })} placeholder='Email'></C.Input>
                        <span>{errors.email?.message}</span>
                    </div>

                    <div>
                        <C.Input
                            type="password" {...register("password", { required: true })} placeholder='Password'></C.Input>
                        <span>{errors.password?.message}</span>
                    </div>

                    <div>
                        <C.Input
                            type="password" {...register("confirmPassword", { required: true })} placeholder='Confirm Password'></C.Input>
                        <span>{errors.confirmPassword?.message}</span>
                    </div>
                    <C.Button type="submit" value="Account">Create new account</C.Button>
                </form>
                <C.Button onClick={goHome} type="button" isHome={true}>Home</C.Button>
            </C.ContainerItems>
        </C.Container>

    )
}


export default Account