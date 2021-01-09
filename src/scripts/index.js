const fs = require('fs')
const prompt = require('prompt-sync')();

const path = prompt("enter folder's path : ");

const files = fs.readdirSync(path);

const images = files.filter(file => /(jpe?g|png|gif|bmp|svg)$/.test(file));

const convertedImage = images.map(image => `\nrequire('./${image}')`);

const splitedPath = path.split('/');

const fileName = splitedPath[splitedPath.length - 1];

const data = `const ${fileName} = [${convertedImage}\n]\n export default ${fileName};`;

fs.writeFileSync(`${path}/${fileName}.js`, data);

console.log(`${fileName}.js has successfully created in ${path}`);