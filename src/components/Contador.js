
import React from 'react';
import './App.css';


const Contador = (props) => (
    <h1 class="my-title">{props.horas}:{props.minutos}:{props.segundos}:{props.centesimo}</h1>
)

export default Contador;