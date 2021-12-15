/* eslint-disable no-array-constructor */
/* eslint-disable no-undef */
import React from "react";
import * as C from './styles'
import ImageEvents from "../../components/imageEvents";
import Header from "../../components/header";
import Footer from "../../components/footer";


function Events() {

    function date() {
        const dayName = ["Sunday", "Monday", "Tuesday", "Weldnesday", "Thursday", "Friday", "Saturday"]
        const monName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const now = new Date()
        const day = dayName[now.getDay()]
        const dayNumber = now.getDay()
        const month = monName[now.getMonth()]
        const message = `${day}, ${dayNumber} ${month}`
        return message
    }


    return (
        <C.Container>
            <Header></Header>
            <div className="container">
                <C.Date>
                    <h1>{date()}</h1>
                    <p>Next events</p>

                </C.Date>
                <ImageEvents />
            </div>
            <Footer />

        </C.Container>

    )
}

export default Events