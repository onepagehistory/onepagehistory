import * as React from 'react';
import { IChartCard } from '../../data/plot-chart';
import { useSiteData } from 'react-static';
import './MinimapEvents.scss';

const EVENT_HEIGHT = 3;

export const MinimapEvents = () => {
    const { data } = useSiteData();
    const { from, to, bars } = data;
    const length = to - from;

    return (
    <div className="minimap-events">{bars.map((card: IChartCard) =>
        <div
            key={card.eventId}
            className="minimap-events__event"
            style={
                {
                    left: ((to - card.to) / length) * 100 + '%'
                    , bottom: card.row * EVENT_HEIGHT + 6
                    , width: (card.to - card.from) / length * 100 + '%'
                }
            }></div>
    )}</div>
    )
}