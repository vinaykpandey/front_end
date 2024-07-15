import React from "react";
import  ReactDOM from 'react-dom';
/* jsx - javascript extension */
//ReactDOM.render(kya dikhana hai, kaha dikhana hai)
// React.Fragment> --> syntactic sugar --> <>
const firstName = 'Vinay';
const lastName = 'Pandey';
const todayDate = new Date().toLocaleDateString();
const currentTime =  new Date().toLocaleTimeString();
const imgaeUrl_200 = "https://picsum.photos/200/300";
const imgaeUrl_250 = "https://picsum.photos/250/300";
const imgaeUrl_300 = "https://picsum.photos/300/300";
const webLink = 'https://picsum.photos/';
ReactDOM.render(
    <>
        <i>My name  is  {firstName} {lastName}</i>
        <p>Today date is: {todayDate}</p>
        <p>Current time is: {currentTime}</p>
        <h1 contentEditable="true"> My name is {firstName}</h1>
        <img  src={imgaeUrl_200} alt="Random Image" />
        <img  src={imgaeUrl_250} alt="Random Image" />
        <a href={webLink} target="_blank">
            <img  src={imgaeUrl_300} alt="Random Image" />
        </a>
        
    </>,
    document.getElementById('root')
)