import React, { useState, useRef, useEffect } from "react";
// Se importa los Hooks useState, useRef y useEffect desde React
import "../assets/css/App.css";

const Calculadora = (props) => {
    return (
        <div className="App">
            <div className="container">
                <h1>Calculadora</h1>

                <div className="calc-app">
                    <form>
                        <input
                            type="text"
                            value={props.resultado}
                            ref={props.inputRef}
                        ></input>
                    </form>
                    <hr />
                    <div className="botones">
                        <button name="" id="reset" onClick={props.reset}>
                            C
                        </button>
                        <button
                            onClick={props.eventOnclick}
                            id="dividir"
                            name="/"
                        >
                            /
                        </button>
                        <button
                            onClick={props.eventOnclick}
                            id="multiplicar"
                            name="*"
                        >
                            *
                        </button>
                        <button id="clear" id="clear" onClick={props.clear}>
                            x
                        </button>
                        <button onClick={props.eventOnclick} name="7">
                            7
                        </button>
                        <button onClick={props.eventOnclick} name="8">
                            8
                        </button>
                        <button onClick={props.eventOnclick} name="9">
                            9
                        </button>
                        <button
                            onClick={props.eventOnclick}
                            id="restar"
                            name="-"
                        >
                            -
                        </button>
                        <button onClick={props.eventOnclick} name="4">
                            4
                        </button>
                        <button onClick={props.eventOnclick} name="5">
                            5
                        </button>
                        <button onClick={props.eventOnclick} name="6">
                            6
                        </button>
                        <button
                            onClick={props.eventOnclick}
                            id="sumar"
                            name="+"
                        >
                            +
                        </button>
                        <button onClick={props.eventOnclick} name="1">
                            1
                        </button>
                        <button onClick={props.eventOnclick} name="2">
                            2
                        </button>
                        <button onClick={props.eventOnclick} name="3">
                            3
                        </button>
                        <button id="result" onClick={props.result} name="=">
                            =
                        </button>
                        <button onClick={props.eventOnclick} name="%">
                            %
                        </button>
                        <button onClick={props.eventOnclick} name="0">
                            0
                        </button>
                        <button onClick={props.eventOnclick} name=".">
                            .
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculadora;
