const express = require('express');
const app = express();
const jsonHelper = require('./Services/jsonHelper');
const countHelper = require('./Services/countHelper.js');
const fs = require('fs');


app.get('/', function (req, res) {
    const data = jsonHelper.getJsonData();
    const location = data.location;
    const language = data.language;
    const text = data.text;
    let price=0, time=0;
    countHelper.getTextLength(location, text, function (countOfSymbols) {
        console.log(countOfSymbols);
        price = countHelper.getPrice(countOfSymbols, language);
        time = countHelper.getTime(countOfSymbols, language);
        if(!countHelper.isExpensive(location,text)) {
            price = 1.2 * price;
            time = 1.2 * time;
            console.log(countHelper.isExpensive(location,text))
        }
        console.log(price, time); 
        countHelper.isExpensive(location);       
    })
    res.send("OK");
});


let server = app.listen(3000, function () {
    console.log('Server is running!');
});
