import React, { useState } from "react";
import PintoNumHijo from "./PintoNumHijo"; // Asegúrate de importar el componente hijo

function PintoNumPadre() {
    // Definimos el estado para los dos números
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [mostrarNumeros, setMostrarNumeros] = useState(false); // Estado para mostrar o no los números

    // Función que se ejecuta al hacer clic en el botón
    const handleClick = () => {
        setMostrarNumeros(true); // Esto activará la visualización de los números en el componente hijo
    };

    return (
        <div>
            <h1>Pinto Números Padre</h1>
            <label>Introduzca el número 1</label>
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)} // Actualiza el estado con el valor del input
            /><br/>
            
            <label>Introduzca el número 2</label>
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)} // Actualiza el estado con el valor del input
            /><br/>
            
            <hr/>
            <button onClick={handleClick}>Pintar números</button>

            {/* Mostramos el componente hijo solo si mostrarNumeros es true */}
            {mostrarNumeros && <PintoNumHijo numero1={num1} numero2={num2} />}
        </div>
    );
}

export default PintoNumPadre;