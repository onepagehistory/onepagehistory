const { readMdFiles } = require('./read-md-files');

const entries = readMdFiles()
    .map(entry => {
        entry.from = Number.parseInt(entry.from, 10);
        entry.to = Number.parseInt(entry.to, 10);
        return entry;
    });

module.exports.data = {
    entries
}