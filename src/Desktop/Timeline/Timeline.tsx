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
import { useSiteData } from 'react-static';



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
                <CardLine
                    cards={cards.filter(card => card.row > 5)}
                    selectedId={selectedId}
                    />
            </div>
            <div>
                {/* <DecadeMarks /> */}
            </div>
            <div className="timeline__events">
                <CardLine
                    cards={cards.filter(card => card.row < 6)}
                    selectedId={selectedId}
                    />
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

