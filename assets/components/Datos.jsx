import React, { useState } from 'react'
import '../css/datos.css'

function Datos({ calcularTotal, setDinero, setPersonas }) {

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
                    <button className='percent' id='5' onClick={(e) => {
                        let id = parseInt(e.target.id);
                        console.log(id);
                        let porce = id / 100;
                        /* console.log(porce); */
                        calcularTotal(porce);
                    }}>5%</button>
                    <button className='percent' id='10' onClick={(e) => {
                        let id = parseInt(e.target.id);
                        console.log(id);
                        let porce = id / 100;
                        /* console.log(porce); */
                        calcularTotal(porce);
                    }}>10%</button>
                    <button className='percent' id='15' onClick={(e) => {
                        let id = parseInt(e.target.id);
                        console.log(id);
                        let porce = id / 100;
                        /* console.log(porce); */
                        calcularTotal(porce);
                    }}>15%</button>
                    <button className='percent' id='25' onClick={(e) => {
                        let id = parseInt(e.target.id);
                        console.log(id);
                        let porce = id / 100;
                        /* console.log(porce); */
                        calcularTotal(porce);
                    }}>25%</button>
                    <button className='percent' id='50' onClick={(e) => {
                        let id = parseInt(e.target.id);
                        console.log(id);
                        let porce = id / 100;
                        /* console.log(porce); */
                        calcularTotal(porce);
                    }}>50%</button>
                    <input type="text" placeholder='Custom' id='custom'
                        onChange={(e) => {
                            let id = 0;
                            if (e.target.value == ""){
                                id = 0;
                            }else{
                                id = parseInt(e.target.value);
                            }
                            
                            if (id <= 0){
                                id = 0;
                            }
                            
                            console.log(id);

                            let porce = id / 100;
                            /* console.log(porce); */
                            calcularTotal(porce);
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Datos