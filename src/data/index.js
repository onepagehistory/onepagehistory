import { CURRENT_YEAR } from '../shared/const';

const { readMdFiles } = require('./read-md-files');
const { plotChart } = require('./plot-chart');

const eventsArray = readMdFiles();
const cards = plotChart(eventsArray);
const events = eventsArray.reduce((acc, curr) => {
    acc[curr.name] = curr;
    return acc;
}, Object.create(null));

const data = {
    from: -500,
    to: CURRENT_YEAR,
    events,
    cards
}

console.log(data);

export { data }
