const express = require('express');
const app = express();
const jsonHelper = require('./Services/jsonHelper');
const countHelper = require('./Services/countHelper.js');
const fs = require('fs');


app.get('/', function (req, res) {
    const data = jsonHelper.getJsonData();
    const format = data.format;
    const language = data.language;
    const text = data.text;

    let price = 0, time = 0;
    let countOfSymbols = text.length;
    price = countHelper.getPrice(countOfSymbols, language);
    time = countHelper.getTime(countOfSymbols, language);
    
    if (!countHelper.isExpensive(format)) {
        price = 1.2 * price;
        time = 1.2 * time;
    }
    
    countHelper.output(price, time)
    console.log(countHelper.output(price, time))
    
    res.send(countHelper.output(price, time));
});


let server = app.listen(3000, function () {
    console.log('Server is running!');
});
