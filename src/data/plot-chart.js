const { CURRENT_YEAR, YEAR_LENGTH, SIZES } = require('../shared/const');
const PLACEMENT_STEP_CHECK = 1;

function plotChart(eventsArray) {
    // TODO: calculate it
    const CARD_LENGTH_IN_YEARS = 34; // ~340px is the max width of the Card
    const CARD_HEIGHT_IN_ROWS = 4;

    eventsArray.sort((a, b) => {
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

    const fromYear = Math.min(...eventsArray.map(e => e.from));
    const from = (Math.floor(fromYear / 10) - 1) * 10;
    const to = CURRENT_YEAR;

    // TODO: refactor
    const visualBlocks = [];   // RectanglesArray
    const cards = [];

    for (let event of eventsArray) {
        const x = (to - event.to) * YEAR_LENGTH;

        const cardBlock = {
            width: CARD_LENGTH_IN_YEARS,
            height: CARD_HEIGHT_IN_ROWS,
            x,
            y: 0
        };

        const rangeBlock = {
            width: (event.to - event.from) * YEAR_LENGTH,
            height: 1,
            x,
            y: 0
        };

        while (true) {
            if (!ifAnyBlockOverlaps(visualBlocks, cardBlock, rangeBlock)) {
                const _cardBlock = {
                    ...cardBlock,
                    y: cardBlock.y
                };

                const _rangeBlock = {
                    ...rangeBlock,
                    y: rangeBlock.y
                };

                if (!ifAnyBlockOverlaps(visualBlocks, _cardBlock, _rangeBlock)) {
                    visualBlocks.push(_cardBlock);
                    visualBlocks.push(_rangeBlock);

                    const card = {
                        eventId: event.name,
                        from: event.from,
                        to: event.to,
                        row: _rangeBlock.y, // TODO: use common y
                    }

                    cards.push(card);
                    break;
                }
            }

            cardBlock.y  += PLACEMENT_STEP_CHECK;
            rangeBlock.y += PLACEMENT_STEP_CHECK;
        };
    }

    return cards;
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