import React from 'react';
import './CenturiesNavBar.css';


export const CenturiesNavBar = (props)=> {
    const createScrollTo = year => event => {
        event.preventDefault();
        props.scrollTo(year);
    }

    return <div className="CenturiesNavBar">
        <div className="CenturiesNavBar__Items">{
            [2000, 1500, 1000, 500, 0 ].map(year =>(
                <a
                    key={year}
                    href="#"
                    className="CenturiesNavBar__Item"
                    onClick={ createScrollTo(year) }
                    >{year} year</a>
            ))
        }</div>
        <div
            className="CenturiesNavBar__ScrollPositionIndicator"
            style={ { width: 100, left: 20 } }
            ></div>
    </div>
}
