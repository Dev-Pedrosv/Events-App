import React from 'react'

import Home from './Pages/Home';
import Events from './Pages/Events'
import Event from './Pages/Event'
import Account from './Pages/Account'
import Tickets from './Pages/Tickets';

import { Routes, Route } from 'react-router-dom';
import NewEvents from './Pages/NewEvents';


export default function MainRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event" element={<Event />} />
            <Route path="/account" element={<Account />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/newevents" element={<NewEvents />} />
        </Routes >

    );
}