const fs = require('fs');
const { data } = require('../src/data/index.js');

const csv = data.entries.map(entry =>
    // title  |  wiki link | img_url   | dates                         | description    
    //        |            |           | text    year from    year to  | short    long
    [ entry.title
    , `https://wikipedia.org/wiki/${entry.name}`
    , entry.imageUrl
    , entry.subtitle
    , entry.dating.from.year()
    , entry.dating.to.year()
    , entry.shortDescription
    ].join('\t')
)
.join('\n');

fs.writeFileSync('./data.tsv', csv);