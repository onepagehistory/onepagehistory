import React from 'react';
import { Card } from '../Card/Card';
import { HistoryEntry } from '../data/History';
import { CenturiesNavBar } from '../CenturiesNavBar/CenturiesNavBar';
import { ISizes } from 'src/shared/types';
import './Scales.css';


export interface IScalesProps {
    selectedId: string;
    sizeId: string;
    decades: any[];
    upperEntries: any[];
    lowerEntries: any[];
    entries: HistoryEntry[];
    sizes: ISizes;
}

export const Scales = ({ selectedId, sizeId, entries, upperEntries, lowerEntries, decades, sizes }: IScalesProps) => {

    return (
        <div className={ `Scales Scales-size-${sizeId}` }>
            <div className="Scales__Events">{
                upperEntries.map(card => {
                    return <Card
                        key={card.entryName}
                        entry={ entries.find(e=>e.name == card.entryName) }
                        isSelected={selectedId == card.entryName}
                        cardPosition={card.cardPosition}
                        rangePosition={card.rangePosition}
                        sizes={sizes}
                        sizeId={sizeId}
                        />
                })
            }</div>

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
                lowerEntries.map(card => {
                    return <Card
                        key={card.entryName}
                        entry={ entries.find(e=>e.name == card.entryName) }
                        isSelected={selectedId == card.entryName}
                        cardPosition={card.cardPosition}
                        rangePosition={card.rangePosition}
                        sizes={sizes}
                        sizeId={sizeId}
                        />
                })
            }</div>

            <div className="Scales__CenturiesNavBar">
                <CenturiesNavBar />
            </div>
        </div>
    )
};