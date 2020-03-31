const fs = require('fs');
const inputFilename = 'input.json';

exports.getJsonData = function() {
    let rawdata = fs.readFileSync(inputFilename);
    let jsonData = JSON.parse(rawdata); 
    return jsonData;
  };

