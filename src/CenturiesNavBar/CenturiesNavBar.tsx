import React, { useRef, useEffect, Component } from 'react';
import './CenturiesNavBar.css';
import { CURRENT_YEAR, YEAR_LENGTH } from '../shared/const.js';

export class CenturiesNavBar extends Component {
    elementRefWrapper = React.createRef<HTMLDivElement>();
    elementRef = React.createRef<HTMLDivElement>();

    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const yearsOffset = window.scrollX / YEAR_LENGTH;
        this.setIndicatorPosition(yearsOffset);
    }

    scrollTo(year: number) {
        const scrollLeft = (CURRENT_YEAR - year) * YEAR_LENGTH - window.innerWidth / 2;
        window.scrollTo({ left: scrollLeft });
    }

    setIndicatorPosition(yearsOffset: number) {
        const left = (this.elementRefWrapper.current.clientWidth / 2000) * yearsOffset;
        this.elementRef.current.style.left = left + 'px';
    }

    render() {
        return (<div className="CenturiesNavBar" ref={this.elementRefWrapper}>
                    <div className="CenturiesNavBar__Items">{
                        [2000,1750, 1500, 1250, 1000, 750, 500, 250, 0 ].map(year =>(
                            <a
                                key={year}
                                href="#"
                                className="CenturiesNavBar__Item"
                                onClick={ (event)=> {
                                    event.preventDefault()
                                    this.scrollTo(year)
                                }}
                            >{year} <span className="CenturiesNavBar__Item-text">year</span>
                            </a>
                        ))
                    }</div>
                    <div
                        ref={this.elementRef}
                        className="CenturiesNavBar__ScrollPositionIndicator"
                        style={ { width: 100 } }
                    ></div>
                </div>
        )
    }

}
