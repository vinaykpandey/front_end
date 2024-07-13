/*react*/
import React from "react";
import  ReactDOM from 'react-dom';

/* jsx - javascript extension */
//ReactDOM.render(kya dikhana hai, kaha dikhana hai)

ReactDOM.render(
    <React.Fragment>
        <h2> Alright, Lets start! </h2>
        <p> Hello, Vins Striker! </p>
        <h3> Multiple tag in wrpped tag </h3>
    </React.Fragment>,
    document.getElementById('root')
);

// React.Fragment> --> syntactic sugar --> <>
ReactDOM.render(
    <>
        <h2> Alright, Lets start! </h2>
        <p> Hello, Vins Striker! </p>
        <h3> Multiple tag in wrpped tag </h3>
    </>,
    document.getElementById('root')
);