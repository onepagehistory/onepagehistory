import * as React from 'react';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';
// TEMP: TODO - to use more efficient way of showing decades
const START_YEAR = -570;
const ENTIRE_TIMELINE = CURRENT_YEAR + Math.abs(START_YEAR);
const DECADE = 10;

export const CenturyLabels = () => {
    let arrDecs = [];
    for (let i = 0; i < ENTIRE_TIMELINE/DECADE; i++){
        arrDecs.push(CURRENT_YEAR - DECADE*i);
    }

    const centuries = arrDecs.map(year => {
        if ((year % 100) == 0) {
            return (
                <p
                    key={year.toString()}
                    className="century-label"
                    style={{ left: (CURRENT_YEAR - year) * YEAR_LENGTH }}>
                    {year}
                </p>
            )
        }
    })

    return <div>{centuries}</div>
}