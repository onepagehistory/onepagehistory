import React from 'react';
import { ScrollNavigation as DesktopNavBar } from '../ScrollNavigation/ScrollNavigation';
import { CardLine } from '../../CardLine/CardLine';
import { IChartCard } from '../../data/plot-chart';
import { DesktopMinimap } from '../Minimap/DesktopMinimap';
import { DecadeMarks } from '../DecadeMarks/DecadeMarks';
import { CenturyLabels } from '../CenturyLabels/CenturyLabels';
import { CURRENT_YEAR } from '../../shared/const.js';

import './Timeline.scss';

// TEMP: TODO - to use more efficient way of showing decades
const START_YEAR = -570;
const ENTIRE_TIMELINE = CURRENT_YEAR + Math.abs(START_YEAR);
const DECADE = 10;

const arrayDecades = () => {
    let arrDecs = [];
    for (let i = 0; i < ENTIRE_TIMELINE/DECADE; i++){
        arrDecs.push(CURRENT_YEAR - DECADE*i);
    }
    return arrDecs;
}
export interface IScalesProps {
    selectedId?: string;
    cards: IChartCard[];
}

export const Timeline = ({ selectedId, cards }: IScalesProps) => {

    return (
        <div className="timeline">
            <div className="timeline__events">
                <CardLine
                    cards={cards.filter(card => card.row > 40)}
                    selectedId={selectedId}
                    />
            </div>
            <DecadeMarks decades={ arrayDecades() }/>
            <div className="timeline__events">
                <CardLine
                    cards={cards.filter(card => card.row < 41)}
                    selectedId={selectedId}
                    />
            </div>
            <div className="timeline__navigation-container">
                <div className="timeline__minimap">
                    <DesktopMinimap />
                </div>
                <div className="timeline__navbar">
                    <DesktopNavBar />
                </div>
            </div>
            <div className="timeline__century-labels">
                <CenturyLabels decades={ arrayDecades() } />
            </div>
        </div>

    )
};

