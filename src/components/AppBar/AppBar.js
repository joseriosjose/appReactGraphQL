import React from 'react'
import Logo from '../../assets/img/logorickandmorty.png'
import './AppBar.css'
import LinkDesign from '../LinkDesign/LinkDesign'
export default function AppBar() {
    return (
        <>
            <header className="AppBarFondo">
                <nav className="menu-main">
                    <a href="https://www.rickandmorty.com/">
                        <img src={Logo} alt="Logotipo serie" className="AppBarLogo" /></a>
                    <LinkDesign to="/" text="INICIO" />
                    <LinkDesign to="/characters" text="PERSONAJES" />
                    <LinkDesign to="/episodes" text="CAPITULOS" />
                    <LinkDesign to="/places" text="LUGARES" />
                </nav>
            </header>
        </>
    )
}
