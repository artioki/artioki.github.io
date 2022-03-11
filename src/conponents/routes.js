import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Map from "./pages/Map/Map"
import Timer from "./pages/Timer/Timer"
import Layout from "./Layout/Layout"


export const useRoutes = isAuthenticatied => {
    if(isAuthenticatied){
        return (
            <Routes>
                <Route path='*' element={<Layout/>}>|{" "}
                    <Route path="home" element={<Home/>} exect/>
                    <Route path="map" element={<Map/>} exect/>
                    <Route path="timer" element={<Timer/>} exect/>
                    <Route path="*" element={<Navigate to="/home" />} />
                </Route>
            </Routes>
        )
    }
    return(
        <Routes>
            <Route path="/" element={ <home/>} exect/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}