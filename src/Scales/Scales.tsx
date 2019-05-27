import React from 'react';
import { Card } from '../Card/Card';
import { HistoryEntry } from '../data/History';
import { YEAR_LENGTH } from '../shared/const';
import './Scales.css';


export interface IScalesProps {
    upperEntries: HistoryEntry[];
    lowerEntries: HistoryEntry[];
    centuries: any[];
    selectedId: string;
    decades: any[];
}

export const Scales = ({ upperEntries, lowerEntries, selectedId, decades }: IScalesProps) => {

    return (
        <div className="Scales">
            <div className="Scales__Events">{
                upperEntries.map(entry => {
                    return <Card
                        key={entry.name}
                        entry={entry}
                        isSelected={selectedId == entry.name}
                        />
                })
            }</div>

            {/* <div className="Scales__Centuries">{
                centuries.map(entry => {
                    const centName = entry.name;
                    const centId = '' + centName;
                    return (
                        <div
                            key={'Century' + entry.century}
                            id={ centId }
                            className="Scales__Century"
                            style={ { flexBasis: entry.years * YEAR_LENGTH } }
                        ><a href={ '#' + centId }>{ centName }</a></div>
                    );
                })
            }</div> */}

            <div className="Scales-Decades">{
                decades.map(entry =>
                    <div
                        key={entry.name}
                        className="Scales-Decades__item"
                    >
                        <p>
                            { entry.name }
                        </p>
                    </div>
                )
            }</div>

            <div className="Scales__Events">{
                lowerEntries.map(entry => {
                    return <Card
                        key={entry.name}
                        entry={entry}
                        isSelected={selectedId == entry.name}
                        />
                })
            }</div>
        </div>
    )
};