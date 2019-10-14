import { CURRENT_YEAR } from '../shared/const';

const CARD_HEIGHT_IN_ROWS = 16;

const { readMdFiles } = require('./read-md-files');
const { plotChart } = require('./plot-chart');

const eventsArray = readMdFiles();
const cards = plotChart({ eventsArray, cardHeight: CARD_HEIGHT_IN_ROWS });
const bars = plotChart({ eventsArray, cardHeight: 1 });
const events = eventsArray.reduce((acc, curr) => {
    acc[curr.name] = curr;
    return acc;
}, Object.create(null));

const data = {
    from: -600,
    to: CURRENT_YEAR,
    events,
    cards,
    bars,
};

export { data }
