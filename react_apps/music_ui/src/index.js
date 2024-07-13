/*react*/
import React from "react";
import  ReactDOM from 'react-dom';

/* jsx - javascript extension */
//ReactDOM.render(kya dikhana hai, kaha dikhana hai)

//This is more handy
ReactDOM.render(
    <div>
        <h2> Alright, Lets start! </h2>
        <p> Hello, Vins Striker! </p>
        <h3> Multiple tag in wrpped tag </h3>
    </div>,
    document.getElementById('root')
);

ReactDOM.render(
    [
        <h2> Hello </h2>,
        <p> Vins </p>,
        <h3> Pandey </h3>
    ],
    document.getElementById('root')
);