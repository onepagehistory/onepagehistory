import React, { useLayoutEffect } from 'react';
import { ICardData, HistoryEntry } from '../data/History';
import { Card } from '../Card/Card';

export const CardLine = (props) => {
    const { entries, cards, selectedId } = props;
    const { sizeId, sizes } = props; // TODO: refactor this

    return <div>{
        cards.map(card => {
            return <Card
                key={card.entryName}

                entry={entries.find(e => e.name == card.entryName)}
                isSelected={selectedId == card.entryName}
                cardPosition={card.cardPosition}
                rangePosition={card.rangePosition}

                sizeId={ sizeId}
                sizes={ sizes }
            />
        })
    }</div>
}