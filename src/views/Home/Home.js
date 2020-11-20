import React from 'react'
import './Home.css'
import Fondo from '../../assets/img/fondo.png'
import AppBar from '../../components/AppBar/AppBar'
import LinkSocial from '../../components/LinkSocial/LinkSocial'
import { ReactComponent as IconFacebook } from "../../assets/img/facebook.svg";
import { ReactComponent as IconInstagram } from "../../assets/img/instagram.svg";
import { ReactComponent as IconTwitter } from "../../assets/img/twitter.svg";
import { ReactComponent as IconLinkedin } from "../../assets/img/linkedin.svg";
import { ReactComponent as IconGithub } from "../../assets/img/github.svg";

export default function Home() {
    return (
        <React.Fragment >
            <AppBar />
            <h1 className="text-home">Web creada utilizando <br />
                api de Rick & Morty,<br />
                GraphQl y React.
                </h1>
            <hr className="division" />
            <h1 className="text-home">
                Jose JR
                </h1>
            <h3 className="text-home">
                Follow Me
                </h3>

            <div className="div_sociales">
                <LinkSocial to="https://www.facebook.com/JoseRiosJose1/"
                    color="#ffffff" >
                    <IconFacebook />
                </LinkSocial>
                <LinkSocial to="https://www.instagram.com/srte__jjr/"
                    color="#ffffff" >
                    <IconInstagram />
                </LinkSocial>
                <LinkSocial to="https://twitter.com/Jose_Jose_Ri"
                    color="#ffffff" >
                    <IconTwitter />
                </LinkSocial>
                <LinkSocial to="https://www.linkedin.com/in/joseriosjose3/"
                    color="#ffffff" >
                    <IconLinkedin />
                </LinkSocial>
                <LinkSocial to="https://github.com/joseriosjose"
                    color="#ffffff" >
                    <IconGithub />
                </LinkSocial>
            </div>

            <img src={Fondo} alt="imagen de fondo" className="imagen" />

        </React.Fragment>
    )
}
