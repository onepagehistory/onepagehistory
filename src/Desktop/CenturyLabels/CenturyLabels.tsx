import * as React from 'react';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';
import './CenturyLabels.scss';

const START_YEAR = -570; // TODO use siteData min year
const ENTIRE_TIMELINE = CURRENT_YEAR + Math.abs(START_YEAR);
const DECADE = 10;

export function CenturyLabels() {

    const output = React.useMemo(() => {
        let arrDecs = [];
        for (let i = 0; i < ENTIRE_TIMELINE / DECADE; i++) {
            arrDecs.push(CURRENT_YEAR - DECADE * i);
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
    }, []);

    return output;
}