const { readMdFiles } = require('./read-md-files');
const { plotChart } = require('./plot-chart');


const entries = readMdFiles()
    .map(entry => {
        entry.from = Number.parseInt(entry.from, 10);
        entry.to = Number.parseInt(entry.to, 10);
        return entry;
    })

const data = plotChart({ entries });
export { data }
