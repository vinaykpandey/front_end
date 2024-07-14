/*react*/
import React from "react";
import  ReactDOM from 'react-dom';

/* jsx - javascript extension */
//ReactDOM.render(kya dikhana hai, kaha dikhana hai)
// React.Fragment> --> syntactic sugar --> <>
const firstName = 'Vinay';
const lastName = 'Pandey';
const todayDate = new Date().toLocaleDateString();
const currentTime =  new Date().toLocaleTimeString();
ReactDOM.render(
    <>
        <h2> Alright, Lets start! </h2>
        <p> Hello, Vins Striker! </p>
        <h3> Multiple tag in wrpped tag </h3>
        <i> My name  is  {firstName} {lastName}</i>
        <br/>
        <b> {firstName + " " +lastName}</b>
        <br/>
        <p>  {`Here come bactick template literals ${firstName} ${lastName}` }</p>
        <p> My luck number is {4+3}, {Math.random()}</p>
        <p>Today date is: {todayDate}</p>
        <p>Current time is: {currentTime}</p>
    </>,
    document.getElementById('root')
);