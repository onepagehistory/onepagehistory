const fs = require('fs');
const path = require('path');

function readMdFiles() {
    const fullDirPath = path.resolve(__dirname, './entries');
    const folderContents = fs.readdirSync(fullDirPath);
    return folderContents
        .map(subPath => path.resolve(fullDirPath, subPath))
        .filter(p => !fs.statSync(p).isDirectory())
        .filter(p => path.extname(p) === '.md')
        .map(p => {
            const fileName = path.basename(p, '.md');
            const fileContents = fs.readFileSync(p, 'utf-8');
            const r = /(<!--\n)((.|\n)*?)(\n-->)/gm;
            const content = fileContents.replace(r, '');
            const meta =
                r.exec(fileContents)[2]
                .split(/\n/)
                .reduce((acc, curr) => {
                    const [, key, value] = /^(.*?)\s*:\s*(.*)\s*$/.exec(curr);
                    // parse from, to
                    if (['from', 'to'].includes(key)) {
                        acc[key] = Number.parseInt(value, 10);
                    } else {
                        acc[key] = value;
                    }
                    return acc;
                }, {});

            return {
                ...meta,
                name: fileName,
                content
            };
        });
}

export { readMdFiles }