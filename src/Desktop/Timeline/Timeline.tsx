import React, { useMemo } from 'react';
import { CardLine } from '../../CardLine/CardLine';
import { IChartCard } from '../../data/plot-chart';
import { CenturyLabels } from '../CenturyLabels/CenturyLabels';
import { DecadeMarks } from '../DecadeMarks/DecadeMarks';
import { DesktopMinimap } from '../Minimap/DesktopMinimap';
import { ScrollNavigation as DesktopNavBar } from '../ScrollNavigation/ScrollNavigation';
import './Timeline.scss';
import { CARD_HEIGHT_IN_ROWS } from '../../shared/const';


export interface IScalesProps {
    selectedId?: string;
    cardChart: {
        cards: IChartCard[];
        maxRow: number;
    }
}

export function Timeline ({ selectedId, cardChart }: IScalesProps) {

    const { upperCards, uppperBasis, lowerCards, lowerBasis } = useMemo(() => {
        const rowCount = cardChart.maxRow;
        const halfRows = Math.floor(rowCount / 2);

        const { upperCards, lowerCards } = cardChart.cards.reduce((acc, card) => {
            if (card.row + CARD_HEIGHT_IN_ROWS > halfRows) {
                acc.upperCards.push(card);
            } else {
                acc.lowerCards.push(card);
            }
            return acc;
        }, { upperCards: [], lowerCards: [] });

        return {
            upperCards,
            uppperBasis: rowCount - halfRows + CARD_HEIGHT_IN_ROWS,
            lowerCards,
            lowerBasis: halfRows + 1,
        };
    }, [cardChart]);

    return (
        <div className="timeline">
            <div className="timeline__events" style={{ flexGrow: uppperBasis }}>
                <CardLine
                    cards={upperCards}
                    selectedId={selectedId}
                    />
            </div>

            <DecadeMarks />

            <div className="timeline__events" style={{ flexGrow: lowerBasis }}>
                <CardLine
                    cards={lowerCards}
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
                <CenturyLabels />
            </div>
        </div>

    )
};

