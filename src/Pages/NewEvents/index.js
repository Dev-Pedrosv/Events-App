import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as C from './styles'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Swal from 'sweetalert2'
function NewEvents() {

    const inputCompany = useRef()
    const inputImage = useRef()
    const inputDayMonth = useRef()
    const inputMonth = useRef()
    const inputPriceMin = useRef()
    const inputPriceMax = useRef()
    const inputHour = useRef()
    const inputAdress = useRef()
    const inputAbout = useRef()

    const navigate = useNavigate()

    function backEvents() {
        navigate('/events')
    }

    async function newEvent() {
        const company = inputCompany.current.value
        const image = inputImage.current.value
        const dateNumber = inputDayMonth.current.value
        const dateString = inputMonth.current.value
        const priceMin = inputPriceMin.current.value
        const priceMax = inputPriceMax.current.value
        const hour = inputHour.current.value
        const adress = inputAdress.current.value
        const about = inputAbout.current.value

        if (company && image && dateNumber &&
            dateString && priceMin && priceMax &&
            hour && adress && about !== ""

        ) {
            const { data: event } = await axios.post(`https://api-s-events.herokuapp.com/events`,
                {
                    company,
                    image,
                    dateNumber,
                    dateString,
                    priceMin,
                    priceMax,
                    hour,
                    adress,
                    about
                })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your event has been created',
                showConfirmButton: true,
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Check the information and try again!',
            })
        }

    }
    return (

        <C.Container>

            <Header >
                <button onClick={backEvents}>
                    <i className='bx bx-chevron-left'></i>
                </button>
            </Header>
            <C.ContainerItems>
                <h1>New Events</h1>

                <C.ContainerInfo>
                    <C.Input ref={inputCompany}
                        placeholder='Company' />
                    <C.Input ref={inputImage}
                        placeholder='Image' />
                    <C.Input ref={inputDayMonth}
                        placeholder='Day Month' />
                    <C.Input ref={inputMonth}
                        placeholder='Month' />
                    <C.Input ref={inputPriceMin}
                        placeholder='Price Min' />
                    <C.Input ref={inputPriceMax}
                        placeholder='Price Max' />
                    <C.Input ref={inputHour}
                        placeholder='Hour' />
                    <C.Input ref={inputAdress}
                        placeholder='Adress' />
                    <C.Input ref={inputAbout}
                        placeholder='About' />


                    <C.Button onClick={newEvent}>New Event</C.Button>

                </C.ContainerInfo>




            </C.ContainerItems>



            <Footer />
        </C.Container>


    )
}

export default NewEvents