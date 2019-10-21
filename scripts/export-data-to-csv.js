const fs = require('fs');
const { readMdFiles } = require('../src/data/read-md-files');

const csv = readMdFiles().map(entry =>
    // title  |  wiki link | img_url   | dates                         | description    
    //        |            |           | text    year from    year to  | short    long
    [ entry.name,
    , entry.title
    , entry.wikiUrl 
    , entry.imageUrl
    , entry.subtitle
    , entry.from
    , entry.to
    , entry.short
    // , entry.content
    ].join('\t')
)
.join('\n');

fs.writeFileSync('./data.tsv', csv);