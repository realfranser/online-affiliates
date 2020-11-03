import React from 'react'
import './Inicio.css';
import makeMoneyOnline from './images/makeMoneyOnline.jpg';
import { finvizUrl } from '../static/links'

function Inicio() {
    return (
        <div className="inicio">
            <img src={makeMoneyOnline}
                alt="" />
            <a href={finvizUrl}>GO TO FINVIZ</a>
        </div>
    )
}

export default Inicio
