import React from 'react';
import { HistoryData, HistoryEntry } from '../data/History';
import { CARD_HEIGHT, CARD_WIDTH, STEP_HEIGHT, YEAR_LENGTH } from '../shared/const';
import { Rectangle, RectanglesArray, RectangleWithPosition } from '../shared/types';
import { Scales } from './Scales';

const PLACEMENT_STEP_CHECK = STEP_HEIGHT / 4;

function ifAnyBlockOverlaps(blocks: RectanglesArray, a: Rectangle, b: Rectangle): boolean {
    return blocks.some(existingBlock =>
        blocksOverlap(existingBlock, a) || blocksOverlap(existingBlock, b)
    );
}

function blocksOverlap(a: RectangleWithPosition, b: RectangleWithPosition) : boolean {
    const a1 = { x: a.x,           y: a.y            };
    const a2 = { x: a.x + a.width, y: a.y + a.height };

    const b1 = { x: b.x,           y: b.y            };
    const b2 = { x: b.x + b.width, y: b.y + b.height };

    return !(
           b1.x > a2.x
        || b1.y > a2.y
        || a1.x > b2.x
        || a1.y > b2.y 
    );
}

export interface IScalesProps {
    from: number;
    to: number;
    data: HistoryData;
}

export const ScalesContainer = ({ from, to, data }: IScalesProps) => {
    console.log('Scales rerender');

    const entries = data.entries;
    entries.sort((a, b) => (b.to - b.from) - (a.to - a.from));

    const upperVisualBlocks: RectanglesArray = [];
    const upperEntries: HistoryEntry[] = [];
    const lowerVisualBlocks: RectanglesArray = [];
    const lowerEntries: HistoryEntry[] = [];

    for (let entry of entries) {
        const x = (to - entry.to) * YEAR_LENGTH;

        const cardBlock = {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            x,
            y: STEP_HEIGHT
        };

        const yearsBlock = {
            width: (entry.to - entry.from) * YEAR_LENGTH,
            height: 2 * STEP_HEIGHT,
            x,
            y: 0
        };

        while (true) {
            if (!ifAnyBlockOverlaps(upperVisualBlocks, cardBlock, yearsBlock)) {
                upperVisualBlocks.push(cardBlock);
                upperVisualBlocks.push(yearsBlock);
                entry['cardPosition'] = cardBlock;
                entry['yearPosition'] = yearsBlock;
                upperEntries.push(entry);
                break;
            }

            if (!ifAnyBlockOverlaps(lowerVisualBlocks, cardBlock, yearsBlock)) {
                lowerVisualBlocks.push(cardBlock);
                lowerVisualBlocks.push(yearsBlock);
                entry['cardPosition'] = cardBlock;
                entry['yearPosition'] = yearsBlock;
                lowerEntries.push(entry);
                break;
            }

            cardBlock.y  += PLACEMENT_STEP_CHECK;
            yearsBlock.y += PLACEMENT_STEP_CHECK;
        };
    }

    const toCentury = Math.floor(to / 100);
    const fromCentury = Math.ceil(from / 100);
    const centuries = 
        new Array(toCentury - fromCentury)
        .fill(undefined)
        .map((_, i)=> ({
            name: (toCentury - i) * 100,
            century: toCentury - i,
            years: 100,
        }));

    if (from % 100) {
        centuries.push({
            name: (fromCentury - 1) * 100,
            century: fromCentury - 1,
            years: from % 100
        });
    }

    if (to % 100) {
        centuries.unshift({
            name: to,
            century: toCentury + 1,
            years: to % 100
        });
    }

    return (
        <Scales
            upperEntries={upperEntries} 
            lowerEntries={lowerEntries} 
            centuries={ centuries }
        ></Scales>
    )
};