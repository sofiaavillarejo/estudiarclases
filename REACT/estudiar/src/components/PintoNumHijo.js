import React from "react";

function PintoNumHijo(props) {
    // Calculamos la suma de los números recibidos como props
    const suma = parseFloat(props.numero1) + parseFloat(props.numero2);

    return (
        <div>
            <h1>El resultado de la suma de los números {props.numero1} + {props.numero2} es: {suma}</h1>
        </div>
    );
}

export default PintoNumHijo;