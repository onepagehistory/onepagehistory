import React from 'react';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';

export const BgCenturies = (props) => {
    const century = props.centuries.map(year => {
        if ((year.name % 100) == 0) {
            return (
                <p
                    key={year.name.toString()}
                    className="century-label"
                    style={{ left: (CURRENT_YEAR - year.name) * YEAR_LENGTH }}>
                    {year.name}
                </p>
            )
        }
    })

    return <div>{century}</div>
}
