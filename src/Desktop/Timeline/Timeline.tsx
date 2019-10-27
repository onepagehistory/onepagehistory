import React from 'react';
import { CenturiesNavBar } from '../../CenturiesNavBar/CenturiesNavBar';
import { CardLine } from '../../CardLine/CardLine';
import { IChartCard } from '../../data/plot-chart';
import { DesktopMinimap } from '../Minimap/DesktopMinimap';
import './Timeline.scss';


export interface IScalesProps {
    selectedId?: string;
    cards: IChartCard[];
}

export const Timeline = ({ selectedId, cards }: IScalesProps) => {

    return (
        <div className={ `timeline` }>
            <div className="timeline__events">
                <CardLine
                    cards={cards.filter(card => card.row > 40)}
                    selectedId={selectedId}
                    />
            </div>
            <div>
                {/* <DecadeMarks /> */}
            </div>
            <div className="timeline__events">
                <CardLine
                    cards={cards.filter(card => card.row < 41)}
                    selectedId={selectedId}
                    />
            </div>
            <div className="timeline__navigation-container">
                <DesktopMinimap />
                <CenturiesNavBar />
            </div>
            <div>
                {/* <CenturyLabels decades={ decades } /> */}
            </div>
        </div>

    )
};

