import React, { useState, useMemo} from 'react';
import { ScrollNavigation as DesktopNavBar } from '../ScrollNavigation/ScrollNavigation';
import { CardLine } from '../../CardLine/CardLine';
import { IChartCard } from '../../data/plot-chart';
import { DesktopMinimap } from '../Minimap/DesktopMinimap';
import { DecadeMarks } from '../DecadeMarks/DecadeMarks';
import { CenturyLabels } from '../CenturyLabels/CenturyLabels';

import './Timeline.scss';

export interface IScalesProps {
    selectedId?: string;
    cards: IChartCard[];
}

export const Timeline = ({ selectedId, cards }: IScalesProps) => {

    const memoDecs = useMemo(() => {
        return <DecadeMarks></DecadeMarks>
    }, []);

    const memoCenturies = useMemo(() => {
        return <CenturyLabels/>
    },[]);

    return (
        <div className="timeline">
            <div className="timeline__events">
                <CardLine
                    cards={cards.filter(card => card.row > 40)}
                    selectedId={selectedId}
                    />
            </div>
            {memoDecs}
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
                {memoCenturies}
            </div>
        </div>

    )
};

