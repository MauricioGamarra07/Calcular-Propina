import { useEffect, useState } from 'react';
import Datos from '../assets/components/Datos'
import Detalle from '../assets/components/Detalle'
import './App.css'

function App() {

  const [dinero, setDinero] = useState(0);
  const [personas, setPersonas] = useState(0);

  const [propina, setPropina] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDinero(dinero)
  }, [])

  useEffect(() => {
    setPersonas(personas)
  }, [])

  function resetearInfo() {
    setPropina(0);
    setTotal(0);
  }

  const calcularTotal = (porcen) => {

    let propina = porcen * parseInt(dinero);
    /* console.log("Propina es: " + propina); */
    let total = parseInt(dinero) + propina;
    /* console.log("El Total es: " + total); */
    let tip_persona = propina / parseInt(personas);
    setPropina(tip_persona.toFixed(2));
    /* console.log("Propina por persona: " + tip_persona); */
    let reparto = total / parseInt(personas);
    setTotal(reparto.toFixed(2));
    /* console.log("Total por persona: " + reparto); */
  }

  return (
    <div className="App">
      <div className="titulo">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className="card">
        <Datos calcularTotal={calcularTotal} setDinero={setDinero} setPersonas={setPersonas} />
        <Detalle total={total} tip={propina} resetearInfo={resetearInfo} />
      </div>
    </div>
  )
}

export default App
