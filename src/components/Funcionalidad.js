import React, { useRef, useEffect, useState } from "react";
import Calculadora from "./Calculadora";

export default function Funcionalidad() {
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
        console.log(e.clear);
        console.log(resultado);
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
        <Calculadora
            result={result}
            clear={clear}
            inputRef={inputRef}
            resultado={resultado}
            reset={reset}
            eventOnclick={eventOnclick}
        />
    );
}
