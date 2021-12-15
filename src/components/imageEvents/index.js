/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import * as C from './styles'

function ImageEvents() {

    const navigate = useNavigate()

    const [events, setEvents] = useState([])


    function ticket(id) {
        const index = events.findIndex(event => event.id == id)
        localStorage.setItem("event", JSON.stringify(events[index]))

        navigate('/event')
    }

    useEffect(() => {
        async function fetchEvents() {
            const data = await axios.get("https://api-s-events.herokuapp.com/events")
            setEvents(data.data)
        }
        fetchEvents()

    }, [])

    return (

        <C.Container>


            {events.map((event) => (
                <C.ContainerItems key={event.id}>
                    <C.Events background={event.image}>

                        <C.ContainerData>
                            <p className="date-number">{event.dateNumber}</p>
                            <p className="date-string">{event.dateString}</p>
                        </C.ContainerData>

                        <C.Info>
                            <div>
                                <p>{event.priceMin}-{event.priceMax}$</p>
                                <p className="info">{event.company} - {event.hour}</p>
                            </div>
                            <button onClick={() => ticket(event.id)}>
                                <i className='bx bxs-dollar-circle'></i>
                                <p>Buy </p>
                            </button>
                        </C.Info>
                    </C.Events>
                    <div className="items">
                        <a target="_blank" href={`https://www.google.com.br/maps/place/${event.adress},+SP/`}>
                            <i className='bx bx-map'></i><p>{event.adress}</p>
                        </a>
                        <p>119 part.</p>
                    </div>

                </C.ContainerItems>

            ))}

        </C.Container>


    )

}

export default ImageEvents