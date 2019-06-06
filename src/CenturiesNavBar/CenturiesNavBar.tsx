import React, { useRef, useEffect } from 'react';
import './CenturiesNavBar.css';


function listenToScroll(scrollRef){
    if (!scrollRef.current) {
        console.log('NOPE');
        return;
    }

    console.log('LISTENING');
    window.addEventListener('scroll', () => {
        const bodyWidth = document.body.clientWidth;
        const scrollX = window.scrollX;
        const value = (bodyWidth - scrollX) / bodyWidth;
        console.log(value);
        scrollRef.current.style.left
    })
}

export const CenturiesNavBar = (props)=> {
    const scrollRef = useRef(null);

    useEffect(()=>{
        listenToScroll(scrollRef);
    });

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
                    >{year} <span className="CenturiesNavBar__Item-text">year</span>
                </a>
            ))
        }</div>
        <div
            ref={scrollRef}
            className="CenturiesNavBar__ScrollPositionIndicator"
            style={ { width: 100 } }
            ></div>
    </div>
}
