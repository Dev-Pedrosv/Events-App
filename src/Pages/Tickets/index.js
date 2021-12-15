import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import Header from '../../components/header'
import Footer from '../../components/footer'

import QrCode from '../../assets/img/frame.png'
import Swal from 'sweetalert2'
import axios from 'axios'


function Tickets() {


    const navigate = useNavigate()
    const [events, setEvents] = useState([])


    useEffect(() => {
        async function fetchEvents() {
            const data = await axios.get("https://api-s-events.herokuapp.com/tickets")
            console.log(data.data)
            setEvents(data.data)
        }
        fetchEvents()

    }, [])

    const deleteTicket = async (id) => {
        await axios.delete(`https://api-s-events.herokuapp.com/tickets/${id}`)

        const newTickets = events.filter(event => event.id !== id)
        console.log(newTickets, id)

        setEvents(newTickets)

    }


    function backEvents() {
        navigate('/events')
    }

    function deletedTickets(id) {
        Swal.fire({
            title: 'Delete ticket ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm deletion!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Confirmed!',
                    'Your ticket has been deleted.',
                    'success'
                )

                deleteTicket(id)

            }
        })
    }

    return (

        <C.Container>

            <Header >
                <button onClick={backEvents}>
                    <i className='bx bx-chevron-left'></i>
                </button>
            </Header>

            <C.ContainerTickets>

                <h1>My Tickets</h1>

                {events.map((ticket) => (

                    <C.ContainerTicket key={ticket.id}>

                        <C.Image image={ticket.image} />

                        <C.ContainerInfo>
                            <C.Name>
                                <p><span>Name:</span> {ticket.company}</p>
                            </C.Name>
                            <C.Infos>
                                <C.Info>
                                    <p className="description">Date</p>
                                    <p>{ticket.dateNumber}-{ticket.dateString}</p>
                                </C.Info>
                                <C.Info>
                                    <p className="description">Time</p>
                                    <p>{ticket.hour}</p>
                                </C.Info>
                            </C.Infos>
                            <C.Infos>
                                <C.Info>
                                    <p className="description">Gate</p>
                                    <p>Alpha</p>
                                </C.Info>
                                <C.Info>
                                    <p className="description">Seat</p>
                                    <p>Center A. 21</p>
                                </C.Info>
                            </C.Infos>

                        </C.ContainerInfo>

                        <C.QR src={QrCode} alt="QrCode" />


                        <C.ButtonIcon onClick={() => deletedTickets(ticket.id)}>
                            <i className='bx bxs-x-circle'></i>
                        </C.ButtonIcon>
                    </C.ContainerTicket>
                ))}

            </C.ContainerTickets>

            <Footer />
        </C.Container>



    )
}

export default Tickets