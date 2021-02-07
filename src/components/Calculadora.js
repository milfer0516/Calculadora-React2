import React, { useState, useRef, useEffect } from "react";
// Se importa los Hooks useState, useRef y useEffect desde React
import "../App.css";

const Calculadora = () => {
    // Se utiliza el metodo useState pa la captura de los botones y se debe
    // inicializar como un string vacio y declarando un variable
    // con su nombre resultado
    const [resultado, setResultado] = useState("");
    // En esta linea se declara la variable inputRef haciendo uso useRef en null
    const inputRef = useRef(null);
    // Con la variables inputRef se utiliza useEffect con una funcion anonima pero haciendo
    // haciendo referencia a la variable inputRef y accediendo a su valor actual
    // con el metodo focus
    useEffect(() => inputRef.current.focus());
    // Aca hacemos uso del evento onClick para la captura de cada boton
    // que hace uso de la propiedad (e) la cual lleva la variable
    // eventOnclick
    const eventOnclick = (e) => {
        // Se llama de useState a setResultado y capturar el valor de resultado con el
        // metodo concat se accede al evento desde su propiedad name y con la ayuda de.
        // target
        setResultado(resultado.concat(e.target.name));
    };
    // Con esta funcion hacemos uso del evento borrar un elemento
    // a la longitud de la variable resultado-length.
    const clear = () => {
        setResultado(resultado.slice(0, resultado.length - 1));
    };

    const reset = () => {
        setResultado("");
    };
    // Para poder acceder al resultado se utiliza las palabras reservadas try y
    // catch donde try evalua los elementos de resultado y con toString pasa esos
    // valores de string a un numero entero y con catch capturamos el momento de error
    // pasandole un valor de error a setResultado.
    const result = () => {
        try {
            setResultado(eval(resultado).toString());
        } catch (error) {
            setResultado("Error");
        }
    };

    return (
        <div className="App">
            <h1>Calculadora</h1>

            <div className="calc-app">
                <form>
                    <input type="text" value={resultado} ref={inputRef}></input>
                </form>
                <div className="botones">
                    <button name="" id="reset" onClick={reset}>
                        C
                    </button>
                    <button onClick={eventOnclick} id="dividir" name="/">
                        /
                    </button>
                    <button onClick={eventOnclick} id="multiplicar" name="*">
                        *
                    </button>
                    <button id="clear" id="clear" onClick={clear}>
                        x
                    </button>
                    <button onClick={eventOnclick} name="7">
                        7
                    </button>
                    <button onClick={eventOnclick} name="8">
                        8
                    </button>
                    <button onClick={eventOnclick} name="9">
                        9
                    </button>
                    <button onClick={eventOnclick} id="restar" name="-">
                        -
                    </button>
                    <button onClick={eventOnclick} name="4">
                        4
                    </button>
                    <button onClick={eventOnclick} name="5">
                        5
                    </button>
                    <button onClick={eventOnclick} name="6">
                        6
                    </button>
                    <button onClick={eventOnclick} id="sumar" name="+">
                        +
                    </button>
                    <button onClick={eventOnclick} name="21">
                        1
                    </button>
                    <button onClick={eventOnclick} name="">
                        2
                    </button>
                    <button onClick={eventOnclick} name="3">
                        3
                    </button>
                    <button id="result" onClick={result} name="=">
                        =
                    </button>
                    <button onClick={eventOnclick} name="%">
                        %
                    </button>
                    <button onClick={eventOnclick} name="0">
                        0
                    </button>
                    <button onClick={eventOnclick} name=".">
                        .
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculadora;
