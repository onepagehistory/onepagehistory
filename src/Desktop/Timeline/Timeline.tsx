import React from 'react';
import { Card } from '../../Card/Card';
import { HistoryEntry } from '../../data/History';
import { CenturiesNavBar } from '../../CenturiesNavBar/CenturiesNavBar';
import { ISizes } from '../../shared/types';
import { Minimap } from '../../Minimap/Minimap';
import './Timeline.scss';
import { CardLine } from '../../CardLine/CardLine';
import { CenturyLabels } from '../CenturyLabels/CenturyLabels';
import { DecadeMarks } from '../DecadeMarks/DecadeMarks';



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
            <div className="timeline__events">
                <CardLine
                    cards={upperEntries}
                    entries={entries}
                    selectedId={selectedId}

                    sizeId={sizeId}
                    sizes={sizes}
                    />
            </div>
            <div>
                <DecadeMarks decades={ decades } />
            </div>
            <div className="timeline__events">
                <CardLine
                    cards={lowerEntries}
                    entries={entries}
                    selectedId={selectedId}

                    sizeId={sizeId}
                    sizes={sizes}
                    />
            </div>
            <div className="timeline__navigation-container">
                <Minimap />
                <CenturiesNavBar />
            </div>
            <div>
                <CenturyLabels decades={ decades } />
            </div>
        </div>

    )
};

