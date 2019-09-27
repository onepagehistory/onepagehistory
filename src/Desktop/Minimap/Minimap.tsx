import * as React from 'react';
import { IChartCard } from '../../data/plot-chart';
import { useSiteData } from 'react-static';
import './Minimap.scss';

// TODO: pass the visible range

export const Minimap = (props: { cards: IChartCard[] }) => {
    const { data } = useSiteData();
    const { from, to, cards } = data;
    const length = to - from;

    return (
        <div className="minimap">
            { cards.map((card: IChartCard) =>
                <div
                    className="minimap__eventbar"
                    style={
                        { left: ((to - card.to) / length) * 100 + '%'
                        , bottom: card.row * 3 + 6
                        , width: (card.to - card.from) / length * 100 + '%'
                        } }></div>
            ) }
        </div>
    )
}