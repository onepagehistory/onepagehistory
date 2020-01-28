import * as React from 'react';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';

export const CenturyLabels = (props) => {
    const centuries = props.decades.map(year => {
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