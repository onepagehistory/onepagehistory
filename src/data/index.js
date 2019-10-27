const { CURRENT_YEAR } = require('../shared/const');
const { readMdFiles } = require('./read-md-files');
const { plotChart } = require('./plot-chart');
const CARD_HEIGHT_IN_ROWS = 16;

const eventsArray = readMdFiles();
const cards = plotChart({ eventsArray, cardHeight: CARD_HEIGHT_IN_ROWS });
const bars = plotChart({ eventsArray, cardHeight: 1 });
const events = eventsArray.reduce((acc, curr) => {
    acc[curr.name] = curr;
    return acc;
}, Object.create(null));

const data = {
    from: -Math.min(...eventsArray.map(e => e.from)),
    to: CURRENT_YEAR,
    events,
    cards,
    bars,
};

module.exports = { data };
