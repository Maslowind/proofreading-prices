const textract = require('textract');

exports.getTextLength = function (location, text, callback) {
  if (text === "") {
    textract.fromFileWithPath(location, function (error, content) {
      callback(content.length);
    })
  }
  else {
    callback(text.length);
  }
};

exports.getPrice = function (countOfSymbols, language) {
  let priceForSymbol, price;
  if (language === "ru" || language === "ua") priceForSymbol = 0.05;
  else if (language === "en") priceForSymbol = 0.12;
  if (countOfSymbols < 1000) price = 1000 * priceForSymbol;
  else price = countOfSymbols * priceForSymbol;
  return price;
};

exports.getTime = function (countOfSymbols, language) {
  let timeForSymbol, time;
  if (language === "ru" || language === "ua") timeForSymbol = 1333;
  else if (language === "en") timeForSymbol = 333;
  time = 0.5 + countOfSymbols / timeForSymbol;
  if (time < 1) time = 1;
  return time;
};

exports.isExpensive = function (location, text) {
  let format = location.split(".").pop();
  if (format === "docx" || format === "doc" || format === "rtf" || text != "") return true;
  else return false;

};

