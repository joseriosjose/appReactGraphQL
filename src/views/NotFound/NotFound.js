import React from 'react'
import './NotFound.css'
import Particles from 'react-particles-js';
import LogoRick from '../../assets/img/logorickandmorty.png'
import Gato1 from '../../assets/img/gatos/gatos.png'
import Gato2 from '../../assets/img/gatos/gatos2.png'
import Gato3 from '../../assets/img/gatos/gatos3.png'
import Gato4 from '../../assets/img/gatos/gatos4.png'
import Gato5 from '../../assets/img/gatos/gatos5.png'
import Gato6 from '../../assets/img/gatos/gatos6.png'

export default function NotFound() {

    const parametros = {
        "particles": {
            "number": {
                "value": 355,
                "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.48927153781200905,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    const params =
    {
        "particles": {
            "number": {
                "value": 8,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 1,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image",
                    "circle"
                ],
                "image": [
                    {
                        "src": Gato1,
                        "height": 20,
                        "width": 23
                    },
                    {
                        "src": Gato2,
                        "height": 20,
                        "width": 20
                    },
                    {
                        "src": Gato3,
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    }




    const drawcats = () => {
        /*
                <img src={Gato2} alt="gato dos" className="gatos" />
                <img src={Gato3} alt="gato tres" className="gatos" />
                <img src={Gato4} alt="gato cuatro" className="gatos" />
                <img src={Gato5} alt="gato cinco" className="gatos" />
                <img src={Gato6} alt="gato seis" className="gatos" />*/
    }


    return (
        <>
            <div className="x">
                <div className="y">
                    <img src={Gato1} alt="gato uno" className="gatos imgr " />
                </div>
            </div>

            <div className="div_centrado">
                <img src={LogoRick} alt="logotipo" className='logo_notfound' />
                <h1 className="h1_notfound">404</h1>
                <h3 className="h3_notfound">Pagina no encontrada</h3>

            </div>
            <Particles params={parametros} />
        </>
    )
}
