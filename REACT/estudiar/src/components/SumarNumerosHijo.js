function SumarNumerosHijo (props) {

    var suma = parseInt(props.numero1 + props.numero2);

    return (
        <div>
            <h1>El resultado de la suma de los numeros {props.numero1} + {props.numero2} es: {suma}</h1>
        </div>
    )

}
export default SumarNumerosHijo;