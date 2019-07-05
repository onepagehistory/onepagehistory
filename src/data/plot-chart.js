const { CURRENT_YEAR, YEAR_LENGTH, SIZES } = require('../shared/const');
const PLACEMENT_STEP_CHECK = 1;

function plotChart({ entries }) {
    // TODO: calculate it
    const CARD_LENGTH_IN_YEARS = 34; // ~340px is the max width of the Card

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

    const fromYear = Math.min(...entries.map(e => e.from));
    const from = (Math.floor(fromYear / 10) - 1) * 10;
    const to = CURRENT_YEAR;

    const plot = Object.keys(SIZES)
        .reduce((acc, sizeKey) => {
            const sizes = SIZES[sizeKey];
            const { upperEntries, lowerEntries } = plotChartBySizes({ entries, to, sizes });
            acc[sizeKey] = {
                sizes,
                upperEntries,
                lowerEntries,
            };
            return acc;
        }, {});

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
        decades,
        entries,
        plot,
    };
}

function plotChartBySizes({ entries, to, sizes }) {
    const 
        { cardWidth
        , cardHeight
        , stepHeight
        } = sizes;

    const upperVisualBlocks = [];   // RectanglesArray
    const upperEntries = [];        // HistoryEntry[]
    const lowerVisualBlocks = [];   // RectanglesArray
    const lowerEntries = [];        // HistoryEntry[]

    for (let entry of entries) {
        const x = (to - entry.to) * YEAR_LENGTH;

        const cardBlock = {
            width: cardWidth,
            height: cardHeight,
            x,
            y: 0
        };

        const rangeBlock = {
            width: (entry.to - entry.from) * YEAR_LENGTH,
            height: 2,
            x,
            y: 0
        };

        while (true) {
            if (!ifAnyBlockOverlaps(upperVisualBlocks, cardBlock, rangeBlock)) {
                const _cardBlock = {
                    ...cardBlock,
                    y: cardBlock.y + stepHeight
                };

                const _rangeBlock = {
                    ...rangeBlock,
                    y: rangeBlock.y + stepHeight
                };

                if (!ifAnyBlockOverlaps(upperVisualBlocks, _cardBlock, _rangeBlock)) {
                    upperVisualBlocks.push(_cardBlock);
                    upperVisualBlocks.push(_rangeBlock);
                    const card = {
                        entryName: entry.name,
                        cardPosition: _cardBlock,
                        rangePosition: _rangeBlock
                    }
                    upperEntries.push(card);
                    break;
                }
            }

            if (!ifAnyBlockOverlaps(lowerVisualBlocks, cardBlock, rangeBlock)) {
                const _cardBlock = {
                    ...cardBlock,
                    y: cardBlock.y + stepHeight
                };

                const _rangeBlock = {
                    ...rangeBlock,
                    y: rangeBlock.y + stepHeight
                };

                if (!ifAnyBlockOverlaps(lowerVisualBlocks, _cardBlock, _rangeBlock)) {
                    lowerVisualBlocks.push(_cardBlock);
                    lowerVisualBlocks.push(_rangeBlock);
                    const card = {
                        entryName: entry.name,
                        cardPosition: _cardBlock,
                        rangePosition: _rangeBlock
                    }
                    lowerEntries.push(card);
                    break;
                }
            }

            cardBlock.y  += PLACEMENT_STEP_CHECK;
            rangeBlock.y += PLACEMENT_STEP_CHECK;
        };
    }

    return {
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