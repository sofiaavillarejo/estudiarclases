function Propiedades(props){
    //parametros enviados desde index.js
    const {nombre, edad} = props;
    const pulsarBtn = (num) =>{ //coge el numero que le paso en el btn y lo multiplica
        console.log("has pulsado!");
        console.log(num*2);
    }
    return(
        <div>
            <h1>Esto es una prueba con props</h1>
            <p>Hola, me llamo {nombre} y tengo {edad} años.</p>
            <button onClick={() => pulsarBtn(3)}>Pulsa aquí</button>
        </div>
    )
}
export default Propiedades;
