const { CURRENT_YEAR, CARD_HEIGHT, CARD_WIDTH, STEP_HEIGHT, YEAR_LENGTH } = require('../shared/const');

const PLACEMENT_STEP_CHECK = 1;
const CARD_LENGTH_IN_YEARS = 34; // ~340px is the max width of the Card

function plotChart({ entries }) {
    entries.sort((a, b) => {
        let result = 0;
        const aLength = a.to - a.from;
        const bLength = b.to - b.from;
        const aLongerThenCard = aLength > CARD_LENGTH_IN_YEARS;
        const bLongerThenCard = bLength > CARD_LENGTH_IN_YEARS;
        if (!(aLongerThenCard ^ bLongerThenCard)) {
            result = bLength - aLength;
        } else {
            result = bLongerThenCard ? 1 : -1;
        }

        if (result) {
            return result;
        } else {
            return b.name > a.name ? 1 : -1;
        }
    });

    const from = Math.min(...entries.map(e => e.to));
    const to = CURRENT_YEAR;

    const upperVisualBlocks = [];   // RectanglesArray
    const upperEntries = [];        // HistoryEntry[]
    const lowerVisualBlocks = [];   // RectanglesArray
    const lowerEntries = [];        // HistoryEntry[]

    for (let entry of entries) {
        const x = (to - entry.to) * YEAR_LENGTH;

        const cardBlock = {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            x,
            y: 0
        };

        const yearsBlock = {
            width: (entry.to - entry.from) * YEAR_LENGTH,
            height: 2,
            x,
            y: 0
        };

        while (true) {
            if (!ifAnyBlockOverlaps(upperVisualBlocks, cardBlock, yearsBlock)) {
                const _cardBlock = {
                    ...cardBlock,
                    y: cardBlock.y + STEP_HEIGHT
                };

                const _yearsBlock = {
                    ...yearsBlock,
                    y: yearsBlock.y + STEP_HEIGHT
                };

                if (!ifAnyBlockOverlaps(upperVisualBlocks, _cardBlock, _yearsBlock)) {
                    upperVisualBlocks.push(_cardBlock);
                    upperVisualBlocks.push(_yearsBlock);
                    entry['cardPosition'] = _cardBlock;
                    entry['yearPosition'] = _yearsBlock;
                    upperEntries.push(entry);
                    break;
                }
            }

            if (!ifAnyBlockOverlaps(lowerVisualBlocks, cardBlock, yearsBlock)) {
                const _cardBlock = {
                    ...cardBlock,
                    y: cardBlock.y + STEP_HEIGHT
                };

                const _yearsBlock = {
                    ...yearsBlock,
                    y: yearsBlock.y + STEP_HEIGHT
                };

                if (!ifAnyBlockOverlaps(lowerVisualBlocks, _cardBlock, _yearsBlock)) {
                    lowerVisualBlocks.push(_cardBlock);
                    lowerVisualBlocks.push(_yearsBlock);
                    entry['cardPosition'] = _cardBlock;
                    entry['yearPosition'] = _yearsBlock;
                    lowerEntries.push(entry);
                    break;
                }
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


    const toDecade = Math.floor(to / 10);
    const fromDecade = Math.ceil(from / 10);

    const decades =
        new Array(toDecade - fromDecade)
            .fill(undefined)
            .map((_, i)=> ({
                name: (toDecade - i) * 10,
                century: toDecade - i,
                years: 10,
            }));

    if (from % 10) {
        decades.push({
            name: (fromDecade - 1) * 10,
            century: fromDecade - 1,
            years: from % 10
        });
    }

    if (to % 10) {
        decades.unshift({
            name: to,
            century: toDecade+ 1,
            years: to % 10
        });
    }

    return {
        entries,
        centuries,
        decades,
        upperEntries,
        lowerEntries,
    };
}

// ifAnyBlockOverlaps(blocks: RectanglesArray, a: Rectangle, b: Rectangle): boolean
function ifAnyBlockOverlaps(blocks, a, b) {
    return blocks.some(existingBlock =>
        blocksOverlap(existingBlock, a) || blocksOverlap(existingBlock, b)
    );
}

// blocksOverlap(a: RectangleWithPosition, b: RectangleWithPosition) : boolean
function blocksOverlap(a, b) {
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


export { plotChart }