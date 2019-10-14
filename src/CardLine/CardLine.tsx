import React from 'react';
import { Card } from '../Card/Card';
import { IChartCard } from '../data/plot-chart';
import { useSiteData } from 'react-static';
import './CardLine.scss';

export const CardLine = (props) => {
    const { cards, selectedId } = props;
    const { data } = useSiteData();
    const { events } = data;

    const rowIds = cards.map(card => card.row);
    const minRow = Math.min(...rowIds);
    const maxRow = Math.max(...rowIds);

    return <div className="card-line">{
        cards.map((card:IChartCard) =>
            <Card
                key={card.eventId}

                entry={events[card.eventId]}
                isSelected={selectedId == card.eventId}
                card={card}
                minRow={ minRow }
                maxRow={ maxRow + 16 }
                />
        )
    }</div>
}