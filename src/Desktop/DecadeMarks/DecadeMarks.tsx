import React, { useMemo } from 'react';
import { CURRENT_YEAR } from '../../shared/const.js';
import './DecadeMarks.scss';

// TEMP: TODO - to use more efficient way of showing decades
const START_YEAR = -570;
const ENTIRE_TIMELINE = CURRENT_YEAR + Math.abs(START_YEAR);
const DECADE = 10;

export function DecadeMarks () {

    const output = useMemo(() => {
        let arrDecs = [];

        for (let i = 0; i < ENTIRE_TIMELINE / DECADE; i++) {
            arrDecs.push(CURRENT_YEAR - DECADE * i);
        }

        return <div className="decade-marks">{
            arrDecs.map((entry, index) =>
                <div
                    key={index}
                    className="decade-marks__item"
                >
                    <p>
                        {entry}
                    </p>
                </div>
            )
        }</div>

    }, []);

    return output;
}
