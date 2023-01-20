import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Appoinment from './Appoinment'
import Dashboard from './Dashboard'
import Login from './Login'

function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/appoinment" element={<Appoinment/>}/>
    </Routes>
  )
}

export default MainRoute