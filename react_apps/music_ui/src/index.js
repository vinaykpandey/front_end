/*react*/
import React from "react";
import  ReactDOM from 'react-dom';

/* jsx - javascript extension */
//ReactDOM.render(kya dikhana hai, kaha dikhana hai)
// React.Fragment> --> syntactic sugar --> <>
ReactDOM.render(
    <>
        <h1> Welome to PrimeVideos App picklist</h1>
        <p>  Below are  top 5 web series from PrimeVideos </p>
        <ol>
            <li>
                Family Man
            </li>
            <li>
                Mirzapur
            </li>
            <li>
                Hostel Days
            </li>
            <li>
                Bomby diary
            </li>
            <li>
                Rakshak
            </li>
        </ol>
       
    </>,
    document.getElementById('root')
);