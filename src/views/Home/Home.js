import React from 'react'
import './Home.css'
import Fondo from '../../assets/img/fondo.jpg'
import AppBar from '../../components/AppBar/AppBar'


export default function Home() {
    return (
        <React.Fragment >
            <div className="body-css" background={Fondo}>
                <AppBar />
            </div>
        </React.Fragment>
    )
}
