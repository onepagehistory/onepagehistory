import React from 'react';
import { Card } from '../Card/Card';
import { IChartCard } from '../data/plot-chart';
import { useSiteData } from 'react-static';

export const CardLine = (props) => {
    const { cards, selectedId } = props;
    const { data } = useSiteData();
    const { events } = data;
    const { sizeId, sizes } = props; // TODO: refactor this

    return <div>{
        cards.map((card:IChartCard) => {

            return <Card
                key={card.eventId}

                entry={events[card.eventId]}
                isSelected={selectedId == card.eventId}
                card={card}
                />
        })
    }</div>
}