const fs = require('fs');
const path = require('path');
const { data } = require('../src/data/index.js');

/**
 * <!--
 * title:       .
 * subtitle:    .
 * from:        .
 * to:          .
 * short:       .
 * imageUrl:    .
 * wikiUrl:     .
 * -->
 */

const createHeader = (entry) =>
`<!--
title:       ${ entry.title }
subtitle:    ${ entry.subtitle }
from:        ${ entry.dating.from.year() }
to:          ${ entry.dating.to.year()}
short:       ${ entry.shortDescription }
imageUrl:    ${ entry.imageUrl }
wikiUrl:     https://wikipedia.org/wiki/${entry.name}
-->
`;

data.entries.map(entry => {
    entry.fileName = entry.name.toLowerCase().replace(/_/g, '-');
    return entry;
})
data.entries.map(entry => {
    const header = createHeader(entry)
    const mdFilePath = path.resolve(__dirname, `../src/data/subpages/${ entry.name.toLowerCase() }.md`);
    const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
    const content =  header + '\n\n' + mdContent;
    fs.writeFileSync(path.resolve(__dirname, `../src/data/entries/${ entry.fileName }.md`), content, 'utf-8');
})