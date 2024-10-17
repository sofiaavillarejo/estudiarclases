import { useState } from "react";

function Car(props){
    const [estado, setEstado] = useState(false);
    const [velocidad, setVelocidad] = useState(0);

    //objeto de coche parea almacenar las props recibidas de index.js
    var coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadmaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    //!metodo para comprobar si el coche esta o no arrancado
    const comprobarEstado = () =>{
        if (estado === true){
            return(<h1 style={{color:"green"}}>Arrancado</h1>)
        } else{
            return(<h1 style={{color:"red"}}>Detenido</h1>)
        }
    }

    const acelerar = () =>{
        if ( estado == false){
            alert("El coche está detenido");
            setVelocidad(0);
        } else {
            if ( velocidad >= coche.velocidadMaxima){
                setVelocidad(coche.velocidadMaxima);
            } else {
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    return(
        <div>
            <h1>Component Car: {coche.modelo}</h1>
            <h2>Velocidad máxima: {coche.velocidadMaxima}</h2>
            <h2>Velocidad actual: {velocidad} km/h</h2>
            <h3>¿El coche está arrancado o detenido? - {comprobarEstado()}</h3>
            <button onClick={() => {
                setEstado(!estado)
            }}>Arrancar/detener</button>
            <button onClick={ () => acelerar()}>Acelerar vehiculo</button>
        </div>
    )
}
export default Car;