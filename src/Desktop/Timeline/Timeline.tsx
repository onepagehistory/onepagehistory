import React from 'react';
import { Card } from '../../Card/Card';
import { IHistoryEvent } from "../../data/HistoryEvent";
import { CenturiesNavBar } from '../../CenturiesNavBar/CenturiesNavBar';
import { ISizes } from '../../shared/types';
import { Minimap } from '../Minimap/Minimap';
import './Timeline.scss';
import { CardLine } from '../../CardLine/CardLine';
import { CenturyLabels } from '../CenturyLabels/CenturyLabels';
import { DecadeMarks } from '../DecadeMarks/DecadeMarks';
import { IChartCard } from '../../data/plot-chart';



export interface IScalesProps {
    selectedId?: string;
    cards: IChartCard[];

    // sizeId?: string;
    // decades?: any[];
    // upperEntries?: any[];
    // lowerEntries?: any[];
    // entries?: IHistoryEvent[];
    // sizes?: ISizes;
}

export const Timeline = ({ selectedId, cards }: IScalesProps) => {

    return (
        <div className={ `timeline` }>
            <div className="timeline__events">
                {/* <CardLine
                    cards={upperEntries}
                    entries={entries}
                    selectedId={selectedId}

                    sizeId={sizeId}
                    sizes={sizes}
                    /> */}
            </div>
            <div>
                {/* <DecadeMarks decades={ decades } /> */}
            </div>
            <div className="timeline__events">
                {/* <CardLine
                    cards={lowerEntries}
                    entries={entries}
                    selectedId={selectedId}

                    sizeId={sizeId}
                    sizes={sizes}
                    /> */}
            </div>
            <div className="timeline__navigation-container">
                <Minimap
                    cards={cards}
                    />
                <CenturiesNavBar />
            </div>
            <div>
                {/* <CenturyLabels decades={ decades } /> */}
            </div>
        </div>

    )
};

