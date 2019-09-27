import React from 'react';
import { Card } from '../Card/Card';
import { HistoryEntry } from '../data/History';
import { CenturiesNavBar } from '../CenturiesNavBar/CenturiesNavBar';
import { ISizes } from '../shared/types';
import { Minimap } from '../Minimap/Minimap';
import './Timeline.scss';


export interface IScalesProps {
    selectedId?: string;
    sizeId?: string;
    decades?: any[];
    upperEntries?: any[];
    lowerEntries?: any[];
    entries?: HistoryEntry[];
    sizes?: ISizes;
}

export const Timeline = ({ selectedId, sizeId, entries, upperEntries, lowerEntries, decades, sizes }: IScalesProps) => {

    return (
        <div className={ `timeline timeline--size-${sizeId}` }>
            <div className="timeline__events">{
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
            }
                {/* <BgCenturies centuries={decades}/> */}
            </div>

            <div className="timeline__decades">{
                decades.map(entry =>
                    <div
                        key={entry.name}
                        className="timeline-decades__item"
                    >
                        <p>
                            { entry.name }
                        </p>
                    </div>
                )
            }</div>

            <div className="timeline__events">{
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

            <div className="timeline__navigation-container">
                <Minimap />
                <CenturiesNavBar />
            </div>
        </div>

    )
};

