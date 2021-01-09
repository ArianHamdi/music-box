var fs = require('fs');

// Read in the libs from this directory and add them as exports
// This way you can just reference
fs.readdirSync('./SVGs').forEach(function(file){
    if ( file.indexOf(".svg") > -1 && file != "index.js" ) 
        exports[ file.replace('.svg','') ] = require('./'+file);
});