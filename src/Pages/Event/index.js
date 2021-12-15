import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import Header from '../../components/header'
import Footer from '../../components/footer'
import * as C from './styles'

import axios from 'axios'



function Event() {

    const event = localStorage.getItem("event")
    const ticket = JSON.parse(event)

    const { id, company, image, dateNumber, dateString, priceMin, priceMax, hour, adress, about } = ticket


    const newTicket = async (ticketId) => {

        await axios.post(`https://api-s-events.herokuapp.com/tickets/${ticketId}`)
    }

    const navigate = useNavigate()

    function backEvents() {
        navigate('/events')
    }

    function buyTicket(ticketId) {
        Swal.fire({
            title: 'Confirm purchase ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm buy!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Confirmed!',
                    'Your ticket has been purchased.',
                    'success'
                )

                newTicket(ticketId)

                navigate('/tickets')
            }
        })
    }


    return (
        <C.Container>
            <Header>
                <button onClick={backEvents}>
                    <i className='bx bx-chevron-left'></i>
                </button>

            </Header>


            <C.ContainerItems key={id}>
                <C.Image background={image}>

                    <C.ContainerData>
                        <p className="date-number">{dateNumber}</p>
                        <p className="date-string">{dateString}</p>
                    </C.ContainerData>

                    <C.Info>
                        <div>
                            <p className="info">{company} - {hour}</p>
                        </div>
                    </C.Info>
                </C.Image>

                <C.ContainerInfo>
                    <C.Adress>

                        <a target="_blank" href={`https://www.google.com.br/maps/place/${adress},+SP/`}>

                            <i className='bx bx-map'></i>
                            <p>{adress}</p>
                        </a>

                        <div>
                            <i className='bx bxs-megaphone'></i>
                            <p>Lecture</p>
                        </div>
                    </C.Adress>
                    <C.Description>
                        <p>{priceMin}-{priceMax}$</p>
                        <p>119 participants</p>
                    </C.Description>

                    <C.Button onClick={() => { buyTicket(id) }}>Buy ticket</C.Button>

                    <C.About>
                        <h2>About</h2>
                        <p>{about}
                        </p>

                    </C.About>


                </C.ContainerInfo>

            </C.ContainerItems>


            <Footer />

        </C.Container>
    )
}

export default Event



