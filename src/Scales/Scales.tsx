import React from 'react';
import { Card } from '../Card/Card';
import { HistoryData, HistoryEntry } from '../data/History';
import { SCALE } from '../shared/const';
import './Scales.css';

interface IScalesProps {
    from: number;
    to: number;
    data: HistoryData;
}

function overlaps(aFrom: number, aTo: number, bFrom: number, bTo: number){
    return (aFrom >= bFrom && aFrom <= bTo)
        || (aTo >= bFrom && aTo <= bTo)
}

function overlapsDating(a: HistoryEntry, b: HistoryEntry){
    return overlaps(a.from, a.to, b.from, b.to);
}

function overlapsWidth(aTo: number, bTo: number, width: number){
    return overlaps(aTo - width, aTo, bTo - width, bTo);
}

export const Scales = ({ from, to, data }: IScalesProps) => {
    const entries = data.entries;

    entries.sort((a, b) => b.to - a.to);
    console.log(...entries);
    const rows: HistoryEntry[][] = [];
    loop1:
    for (let entry of entries) {
        loop2:
        for(let rowIndex = rows.length-1; rowIndex >= 0; rowIndex--) {
            const row = rows[rowIndex];
            loop3:
            for(let colIndex = 0; colIndex < row.length; colIndex++) {
                let rowEntry = row[colIndex];
                if (!overlapsDating(entry, rowEntry)) {
                    continue;
                }

                if (rowIndex === rows.length - 1) {
                    entry['depth'] = rows.length;
                    rows.push([ entry ]);
                } else {
                    entry['depth'] = rowIndex + 1;
                    rows[rowIndex + 1].push(entry);
                }

                continue loop1;
            }
        }

        if (rows.length){
            entry['depth'] = 0;
            rows[0].push(entry);
        } else {
            entry['depth'] = 0;
            rows.push([ entry ]);
        }
    }

    entries.sort((a, b) => a.to - b.to);
    console.log(...entries);
    const bubbleRows: HistoryEntry[][] = [];
    loop1:
    for (let entry of entries) {
        loop2:
        for(let rowIndex = 0; rowIndex < bubbleRows.length; rowIndex++) {
            const row = bubbleRows[rowIndex];
            loop3:
            for(let colIndex = 0; colIndex < row.length; colIndex++) {
                let rowEntry = row[colIndex];
                if (overlapsWidth(entry.to, rowEntry.to, 50)) {
                    continue loop2;
                }

                if (entry.to < rowEntry.to) {
                    row.splice(colIndex+1, 0, entry);
                    entry['bubbleDepth'] = rowIndex;
                    entry['rightDepth'] = rowEntry['depth'];
                    continue loop1;
                }
            }

            row.push(entry);
            entry['bubbleDepth'] = rowIndex;
            entry['rightDepth'] = 0;
            continue loop1;
        }

        bubbleRows.push([ entry ]);
        entry['bubbleDepth'] = bubbleRows.length - 1;
        entry['rightDepth'] = 0;
    }


    const toCentury = Math.floor(to / 100);
    const fromCentury = Math.ceil(from / 100);
    const centuries = 
        new Array(toCentury - fromCentury)
        .fill(undefined)
        .map((_, i)=> ({
            name: (toCentury - i) * 100,
            century: toCentury - i,
            years: 100,
        }));

    if (from % 100) {
        centuries.push({
            name: (fromCentury - 1) * 100,
            century: fromCentury - 1,
            years: from % 100
        });
    }

    if (to % 100) {
        centuries.unshift({
            name: to,
            century: toCentury + 1,
            years: to % 100
        });
    }

    return (
        <div className="Scales">
            <div className="Scales__Events">{
                entries.map(entry => {
                    return <Card
                        key={entry.name}
                        entry={entry}
                        depth={entry['depth']}
                        bubble={entry['bubbleDepth']}
                        baseRowLength={ rows.length }
                    />
                })
            }</div>

            <div className="Scales__Centuries">{
                centuries.map(entry => {
                    const centName = entry.name;
                    const centId = '' + centName;
                    return (
                        <div
                            key={'Century' + entry.century}
                            id={ centId }
                            className="Scales__Century"
                            style={ { flexBasis: entry.years * SCALE } }
                        ><a href={ '#' + centId }>{ centName }</a></div>
                    );
                })
            }</div>
        </div>
    )
};