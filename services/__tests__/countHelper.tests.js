const countHelper = require('../countHelper');
let language, count, price, time, format, answerTF;
describe("countHelper logic", () => {
    // test stuff
    test('get price  of work (0) when language is kz and count os symbols is 1500 ', () => {
        language = 'kz'
        count = 1500;
        price = 0;
        expect(countHelper.getPrice(count, language)).toStrictEqual(price);
    });
    test('get price of work (75) when language is ua and count os symbols is 1500 ', () => {
        language = 'ua'
        count = 1500;
        price = 75;
        expect(countHelper.getPrice(count, language)).toStrictEqual(price);
    });
    test('get price of work (0) when language is en and count os symbols is 0 ', () => {
        language = 'en'
        count = 0;
        price = 0;
        expect(countHelper.getPrice(count, language)).toStrictEqual(price);
    });
    test('get price of work (180) when language is en and count os symbols is 1500 ', () => {
        language = 'en'
        count = 1500;
        price = 180;
        expect(countHelper.getPrice(count, language)).toStrictEqual(price);
    });
    test('get price of work (50) when language is en and count os symbols is 500 ', () => {
        language = 'ru'
        count = 500;
        price = 50;
        expect(countHelper.getPrice(count, language)).toStrictEqual(price);
    });






    test('get time in hours of work (0) when language is kz and count os symbols is 1500 ', () => {
        language = 'kz'
        count = 1500;
        time = 0;
        expect(countHelper.getTime(count, language)).toStrictEqual(time);
    });
    test('get time in hours of work (75) when language is ua and count os symbols is 13330 ', () => {
        language = 'ua'
        count = 13330;
        time = 10.5;
        expect(countHelper.getTime(count, language)).toStrictEqual(time);
    });
    test('get time in hours of work (0) when language is en and count os symbols is 0 ', () => {
        language = 'en'
        count = 0;
        time = 0;
        expect(countHelper.getTime(count, language)).toStrictEqual(time);
    });
    test('get time in hours of work (180) when language is en and count os symbols is 1500 ', () => {
        language = 'en'
        count = 6660;
        time = 20.5;
        expect(countHelper.getTime(count, language)).toStrictEqual(time);
    });
    test('get time in hours of work (50) when language is en and count os symbols is 500 ', () => {
        language = 'ru'
        count = 1333;
        time = 1.5;
        expect(countHelper.getTime(count, language)).toStrictEqual(time);
    });


    test('checking format of file for function. docx is true ', () => {
        format = "docx"
        answerTF = true;
        expect(countHelper.isExpensive(format)).toStrictEqual(answerTF);
    });
    test('checking format of file for function. doc is true ', () => {
        format = "doc"
        answerTF = true;
        expect(countHelper.isExpensive(format)).toStrictEqual(answerTF);
    });
    test('checking format of file for function. docm is false ', () => {
        format = "docm"
        answerTF = false;
        expect(countHelper.isExpensive(format)).toStrictEqual(answerTF);
    });
    test('checking format of file for function. rtf is true ', () => {
        format = "rtf"
        answerTF = true;
        expect(countHelper.isExpensive(format)).toStrictEqual(answerTF);
    });

});
