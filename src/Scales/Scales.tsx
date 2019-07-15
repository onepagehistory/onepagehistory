import React from 'react';
import { Card } from '../Card/Card';
import { HistoryEntry } from '../data/History';
import { CenturiesNavBar } from '../CenturiesNavBar/CenturiesNavBar';
import { ISizes } from 'src/shared/types';
import { YEAR_LENGTH, CURRENT_YEAR } from '../shared/const.js'
import './Scales.css';

export interface IScalesProps {
    selectedId?: string;
    sizeId?: string;
    decades?: any[];
    upperEntries?: any[];
    lowerEntries?: any[];
    entries?: HistoryEntry[];
    sizes?: ISizes;
}

function BgCenturies(props) {
    const century = props.centuries.map( year => {
        if ( (year.name % 100) == 0 ) {
            return (
                <p
                    key={ year.name.toString() }
                    className="century-label"
                    style={{ left: (CURRENT_YEAR - year.name) * YEAR_LENGTH }}>
                    { year.name }
                </p>
                )
            }
        }
    )
    return <div>{century}</div>
}

export const Scales = ({ selectedId, sizeId, entries, upperEntries, lowerEntries, decades, sizes }: IScalesProps) => {

    return (
        <div className={ `scales scales--size-${sizeId}` }>
            <div className="scales__events">{
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
                <BgCenturies centuries={decades}/>
            </div>

            <div className="scales__decades">{
                decades.map(entry =>
                    <div
                        key={entry.name}
                        className="scales-decades__item"
                    >
                        <p>
                            { entry.name }
                        </p>
                    </div>
                )
            }</div>

            <div className="scales__events">{
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

            <div className="scales__navigation-container">
                <CenturiesNavBar />
            </div>
        </div>

    )
};

