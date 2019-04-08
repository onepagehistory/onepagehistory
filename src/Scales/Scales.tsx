import React from 'react';
import './Scales.scss';
import { centuryToRoman } from '../shared/toRoman';

export const Scales = ({ from, to }: { from: number, to: number }) => {
    const toCentury = Math.floor(to / 100);
    const fromCentury = Math.ceil(from / 100);
    const centuries = 
        new Array(toCentury - fromCentury)
        .fill(undefined)
        .map((_, i)=> ({
            century: toCentury - i,
            years: 100,
        }));

    if (from % 100) {
        centuries.push({
            century: fromCentury - 1,
            years: from % 100
        });
    }

    if (to % 100) {
        centuries.unshift({
            century: toCentury + 1,
            years: to % 100
        });
    }

    return (<div className="Scales">{
        centuries.map(entry => {
            const centName = centuryToRoman(entry.century);
            const centId = centName;
            return (
                <div
                    key={'Century' + entry.century}
                    id={ centId }
                    className="Scales__Century"
                    style={{ height: entry.years * 1.5 }}
                ><a href={ '#' + centId }>{ centName }</a></div>
            );
        })
    }</div>)
};