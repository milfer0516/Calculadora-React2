import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const Calculadora = () => {
    const [resultado, setResultado] = useState("");
    const inputRef = useRef(null);
    useEffect(() => inputRef.current.focus());

    const eventOnclick = (e) => {
        setResultado(resultado.concat(e.target.name));
    };

    const clear = () => {
        setResultado(resultado.slice(0, resultado.length - 1));
    };

    const reset = () => {
        setResultado("");
    };

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
