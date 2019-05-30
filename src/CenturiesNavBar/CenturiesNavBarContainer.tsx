import React from 'react';
import { CURRENT_YEAR, YEAR_LENGTH } from '../shared/const.js';
import { CenturiesNavBar } from './CenturiesNavBar';

const scrollTo = (year: number) => {
    const scrollLeft = (CURRENT_YEAR - year) * YEAR_LENGTH - window.innerWidth / 2;
    window.scrollTo({ left: scrollLeft });
}

export const CenturiesNavBarContainer = ()=> {
    return <CenturiesNavBar
            scrollTo={ scrollTo }
            />
}
