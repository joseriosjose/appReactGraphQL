import React from 'react'
import './LinkSocial.css'

export default function LinkSocial(props) {
    const { to, color } = props

    return (
        // eslint-disable-next-line
        <a href={to} target="_blank" className="icon_social" >
            <div className="icon_social_div"
                style={{ "fill": color }}>
                {props.children}
            </div>

        </a>
    )
} 