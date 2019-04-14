import React from 'react';
import { Card } from '../Card/Card';
import { centuryToRoman } from '../shared/toRoman';
import './Scales.scss';
import { HistoryData } from '../data';

interface IScalesProps {
    from: number;
    to: number;
    data: HistoryData;
}

export const Scales = ({ from, to, data }: IScalesProps) => {
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

    return (
        <div className="Scales">
            <div className="Scales__Events">{
                data.entries.filter(entry => entry.name).map(entry =>
                    <Card
                        key={entry.name}
                        entry={entry}
                    />
                )
            }</div>

            <div className="Scales__Centuries">{
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
            }</div>
        </div>
    )
};