import * as React from 'react';
import { Minimap } from '../../Desktop/Minimap/';
import { IChartCard } from '../../data/plot-chart';
import './MobileMinimap.scss';

export const MobileMinimap = ({ cards }: { cards: IChartCard[] }) => {
    return (
        <div className="mobile-minimap">
            <Minimap />
        </div>
    )
}