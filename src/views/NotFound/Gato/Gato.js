import React from 'react'
import './Gato.css'
import Gato1 from '../../../assets/img/gatos/gatos.png'
import Gato2 from '../../../assets/img/gatos/gatos2.png'
import Gato3 from '../../../assets/img/gatos/gatos3.png'
import Gato4 from '../../../assets/img/gatos/gatos4.png'
import Gato5 from '../../../assets/img/gatos/gatos5.png'
import Gato6 from '../../../assets/img/gatos/gatos6.png'

export default function Gato(props) {

    const gatos = [Gato1, Gato2, Gato3, Gato4, Gato5, Gato6, Gato6, Gato5, Gato4, Gato3, Gato2, Gato1]


    const gatorandom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    const makeNewPosition = () => {
        const { width, height } = window;

        var h = height - 50;
        var w = width - 50;

        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);

        return [nh, nw];

    }

    const animateDiv = (myclass) => {
        var newq = makeNewPosition();
        $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function () {
            animateDiv(myclass);
        });

    };




    return (
        <div >
            <img src={gatos[gatorandom(0, 12)]} alt="gato uno" className="gatos imgr " />
        </div>
    )
}


/**
 *
 *
    const { number } = props
    var stylesy = {
        transform: `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`
    };
    var stylesx = {
        transform: `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`
    };

 *
 *  <div id={'gatox' + number} className={`x ${'gato' + number}`} style={stylesx}>
            <div id={'gatoy' + number} className={`y ${'gato' + number}`} style={stylesy}>
                <img src={gatos[gatorandom(0, 12)]} alt="gato uno" className="gatos imgr " />
            </div>
        </div >
 *
 */