"use client"; 

import React, { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className="container">
            <p className="counter">{contador}</p>
            <button
                className="boton-incrementar"
                onClick={() => setContador(contador + 1)}
            >
                Incrementar
            </button>
            <button
                className="boton-decrementar"
                onClick={() => {
                    if (contador > 0) setContador(contador - 1);
                }}
            >
                Decrementar
            </button>
            <button className="boton-reiniciar" onClick={() => setContador(0)}>
                Reiniciar
            </button>
        </div>
    );
}

function CarritoPage() {
    return (
        <>
            <style>{`
                             
                .container {
                    text-align: center;
                }

                .counter {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }

                button {
                    margin: 5px;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .boton-incrementar {
                    background-color: #4caf50;
                }

                .boton-incrementar:hover {
                    background-color: #45a049;
                }

                .boton-decrementar {
                    background-color: #f44336;
                }

                .boton-decrementar:hover {
                    background-color: #d32f2f;
                }

                .boton-reiniciar {
                    background-color: #2196f3;
                }

                .boton-reiniciar:hover {
                    background-color: #1976d2;
                }
            `}</style>
            <Contador />
        </>
    );
}

export default CarritoPage;
