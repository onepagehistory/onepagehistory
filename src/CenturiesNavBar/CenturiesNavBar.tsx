import React, { useRef, useEffect, Component } from 'react';
import './CenturiesNavBar.scss';
import { CURRENT_YEAR, YEAR_LENGTH } from '../shared/const.js';

const TICK_YEARS = [2000, 1500, 1000, 500, 0, -500];
const MAX_YEAR_TICK = 2000;
const MIN_YEAR_TICK = -500;
const TICK_LENGTH_IN_YEARS = MAX_YEAR_TICK - MIN_YEAR_TICK;
const STARTING_TICK_OFFSET = CURRENT_YEAR - MAX_YEAR_TICK;

const TICK_LABEL_WIDTH = 80;
const INDICATOR_WIDTH = 100;

export class CenturiesNavBar extends Component {
    elementRefWrapper = React.createRef<HTMLDivElement>();
    elementRef = React.createRef<HTMLDivElement>();

    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }

    handleScroll() {
        const centerOfTheScreenOffset = window.scrollX + 200;
        const yearsOffset = centerOfTheScreenOffset / YEAR_LENGTH - STARTING_TICK_OFFSET;

        // ignore time after 2000
        if (yearsOffset < 0) {
            this.setIndicatorPosition(0);
            return;
        }

        // ignore times before < 0
        if (yearsOffset > TICK_LENGTH_IN_YEARS) {
            this.setIndicatorPosition(STARTING_TICK_OFFSET + TICK_LENGTH_IN_YEARS);
            return;
        }

        this.setIndicatorPosition(yearsOffset);
    }

    setIndicatorPosition(yearsOffset: number) {
        // to properly position the slider
        // we need to add padding, equal to 2 * 1/2 of label width
        // for most left and most right labels
        // and then add 1/2 label width to compensate left offset
        const wrapperWidth = this.elementRefWrapper.current.clientWidth - TICK_LABEL_WIDTH;
        const left = TICK_LABEL_WIDTH / 2 +  (wrapperWidth / TICK_LENGTH_IN_YEARS) * yearsOffset;
        this.elementRef.current.style.left = left + 'px';
    }

    scrollTo(year: number) {
        const DECADE_LENGTH = YEAR_LENGTH*10;
        const scrollLeft = (CURRENT_YEAR - year) * YEAR_LENGTH - DECADE_LENGTH*2;
        window.scrollTo({ left: scrollLeft });
    }

    render() {
        return (
            <div className="navigation">
                <div className="navigation__bar" ref={this.elementRefWrapper}>
                    {
                        TICK_YEARS.map(year => (
                            <a
                                key={year}
                                href="#"
                                className="navigation__item"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.scrollTo(year);
                                }}
                            >{year} <span className="navigation__item-text">year</span></a>
                        ))
                    }
                    <div
                        ref={this.elementRef}
                        className="navigation__indicator"
                        style={{ width: INDICATOR_WIDTH, marginLeft: -INDICATOR_WIDTH/2 }} 
                    ></div>
                </div>
            </div>
        )
    }

}
