import React from 'react';
import { Card } from '../Card/Card';
import { IChartCard } from '../data/plot-chart';
import { useSiteData } from 'react-static';
import './CardLine.scss';

export const CardLine = (props) => {
    const { cards, selectedId } = props;
    const { data } = useSiteData();
    const { events } = data;

    console.log(cards);

    return <div className="card-line">{
        cards.map((card:IChartCard) =>
            <Card
                key={card.eventId}

                entry={events[card.eventId]}
                isSelected={selectedId == card.eventId}
                card={card}
                rowMin={0}
                rowMax={17 + 4}
                />
        )
    }</div>
}