const { CURRENT_YEAR, CARD_HEIGHT_IN_ROWS } = require('../shared/const');
const { readMdFiles } = require('./read-md-files');
const { plotChart } = require('./plot-chart');

const eventsArray = readMdFiles();

// plot timeline and minimap
const cardChart = plotChart({ eventsArray, cardHeight: CARD_HEIGHT_IN_ROWS });
const barChart = plotChart({ eventsArray, cardHeight: 1 });

// compile events for fast access by key
const events = eventsArray.reduce((acc, curr) => {
    acc[curr.name] = curr;
    return acc;
}, Object.create(null));

const data = {
    from: Math.min(...eventsArray.map(e => e.from)),
    to: CURRENT_YEAR,
    events,
    cardChart,
    barChart,
};

module.exports = { data };
