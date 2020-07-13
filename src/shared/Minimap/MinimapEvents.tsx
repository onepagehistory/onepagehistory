import * as React from 'react';
import { useSiteData } from 'react-static';
import { IChartCard } from '../../data/plot-chart';
import { EVENT_HEIGHT, PADDING } from './const';
import './MinimapEvents.scss';

export const MinimapEvents = () => {
    const { data } = useSiteData();

    const output = React.useMemo(() => {
        const { from, to, barChart } = data;
        const length = to - from;
        const bars = barChart.cards;

        return (
            <div className="minimap-events">{bars.map((card: IChartCard) =>
                <div
                    key={card.eventId}
                    className="minimap-events__event"
                    style={
                        {
                            left: ((to - card.to) / length) * 100 + '%'
                            , bottom: card.row * EVENT_HEIGHT + PADDING
                            , width: (card.to - card.from) / length * 100 + '%'
                        }
                    }></div>
            )}</div>
        )
    }, [ data ])

    return output;
}