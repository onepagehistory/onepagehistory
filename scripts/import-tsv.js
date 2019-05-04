const fs = require('fs');
const path = require('path');

const tsv = ``;

const createHeader = (title, wikiUrl, imageUrl, subtitle, from, to, short) =>
`<!--
title:       ${ title }
subtitle:    ${ subtitle }
from:        ${ from }
to:          ${ to } 
short:       ${ short }
imageUrl:    ${ imageUrl }
wikiUrl:     ${ wikiUrl}
-->
`;

tsv.split(/\n/).forEach(line => {
    const [title, wikiUrl, imageUrl, subtitle, from, to, short, mdContent] = line.split(/\t/);
    const fileName  = title.toLowerCase().replace(/\s/g, '-');
    const header = createHeader(title, wikiUrl, imageUrl, subtitle, from, to, short);
    const content =  header + '\n\n' + mdContent;
    fs.writeFileSync(path.resolve(__dirname, `../src/data/entries/${ fileName }.md`), content, 'utf-8');
})