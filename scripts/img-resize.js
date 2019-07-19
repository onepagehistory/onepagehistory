const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

const fullDirPath = path.resolve(__dirname, '../src/data/entries');
const folderContents = fs.readdirSync(fullDirPath);
folderContents
    .map(subPath => path.resolve(fullDirPath, subPath))
    .filter(p => !fs.statSync(p).isDirectory())
    .filter(p => path.extname(p) === '.png' && !p.match(/@\dx\.png$/))
    .map(p => {
        const fileName = path.basename(p, '.png');
        console.log(fileName);
        const imgSize = 120;
        [ imgSize
        , imgSize * 2
        , imgSize * 3
        ].map((size, index) => {
            Jimp.read(p)
                .then(imgFile => {
                    return imgFile
                        .resize(size, size) // resize
                        .quality(100) // set JPEG quality
                        .write(`${fullDirPath}/img/${fileName}@${index+1}x.png`); // save
                })
                .catch(err => {
                    console.error(err);
                });
        })
    });
