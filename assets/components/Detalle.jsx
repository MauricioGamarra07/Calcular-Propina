import React from 'react'
import '../css/detalle.css'

function Detalle({total, tip, resetearInfo}) {

    return (
        <div>
            <div className="card-verde">
                <div className="texto">
                    <div>
                        <p>Tip Amount</p>
                        <h4>/person</h4>
                    </div>
                    <div className="dinero">
                        <h1>${tip}</h1>
                    </div>
                </div>

                <div className="texto">
                    <div>
                        <p>Total</p>
                        <h4>/person</h4>
                    </div>
                    <div className="dinero">
                        <h1>${total}</h1>
                    </div>
                </div>
                <button onClick={() => {
                    resetearInfo()
                }}>RESET</button>
            </div>
        </div>
    )
}

export default Detalle