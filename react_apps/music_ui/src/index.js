/*react*/
import React from "react";
import  ReactDOM from 'react-dom';

/* jsx - javascript extension */
//ReactDOM.render(kya dikhana hai, kaha dikhana hai)
// React.Fragment> --> syntactic sugar --> <>
const first_name = 'Vinay';
ReactDOM.render(
    <>
        <h2> Alright, Lets start! </h2>
        <p> Hello, Vins Striker! </p>
        <h3> Multiple tag in wrpped tag </h3>
        <i> My name  is first_name {first_name} </i>
        <p> My luck number is {4+3}, {Math.random()}</p>
    </>,
    document.getElementById('root')
);