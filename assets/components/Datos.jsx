import React, { useState } from 'react'
import '../css/datos.css'

function Datos({calcularTotal, setDinero, setPersonas}) {

    let darkCyan = "hsl(183, 100%, 15%)";
    let celeste = "hsl(172, 67%, 45%)";
    const [color, setColor] = useState(false);

    const cambiarColorBoton = (e) => {
        /* console.log(e.target.style.backgroundColor); */

        if (color == false) {
            e.target.style.backgroundColor = celeste;
        }
        else {
            e.target.style.backgroundColor = darkCyan;
        }
    }


    return (
        <div>
            <div className="card-blanca">
                <div className="bill">
                    <p>Bill</p>
                    <input type="text" name="" id="dinero" placeholder='0'
                        onChange={(e) => { setDinero(e.target.value) }} />
                </div>
                <div className="number">
                    <p>Number of People</p>
                    <input type="text" name="" id="personas" placeholder='0'
                        onChange={(e) => { setPersonas(e.target.value) }} />
                </div>
                <div className="tip">
                    <p>Select Tip %</p>
                    <button className='percent' id='5' style={{ backgroundColor: darkCyan }} onClick={(e) => {
                        setColor(!color);
                        cambiarColorBoton(e);
                        calcularTotal(e);
                    }}>5%</button>
                    <button className='percent' id='10' style={{ backgroundColor: darkCyan }} onClick={(e) => {
                        setColor(!color);
                        cambiarColorBoton(e);
                        calcularTotal(e);
                    }}>10%</button>
                    <button className='percent' id='15' style={{ backgroundColor: darkCyan }} onClick={(e) => {
                        setColor(!color);
                        cambiarColorBoton(e);
                        calcularTotal(e);
                    }}>15%</button>
                    <button className='percent' id='25' style={{ backgroundColor: darkCyan }} onClick={(e) => {
                        setColor(!color);
                        cambiarColorBoton(e);
                        calcularTotal(e);
                    }}>25%</button>
                    <button className='percent' id='50' style={{ backgroundColor: darkCyan }} onClick={(e) => {
                        setColor(!color);
                        cambiarColorBoton(e);
                        calcularTotal(e);
                    }}>50%</button>
                    <input type="text" placeholder='Custom' id='custom'
                        onChange={(e) => { setCustom(e.target.value) }} />
                </div>
            </div>
        </div>
    )
}

export default Datos