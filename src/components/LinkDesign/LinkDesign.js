import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './LinkDesign.css'

export default function LinkDesign(props) {

    const { to, text } = props
    const location = useLocation();
    var isActive = location.pathname === to;
    var activo = isActive ? 'LinkCustom-active' : 'LinkCustom';
    return (
        <Link to={to} className={activo}>
            <span> {text}</span>
        </Link>
    )
}
