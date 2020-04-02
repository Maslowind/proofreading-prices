const countHelper = require('../countHelper');
let date, expectDate, length;
describe("getfinalDate logic", () => {
    // test stuff
    test('get final date 10:30 07.04.2020 when current date is 21:47 06.04.2020 and work takes 0.5 hours', () => {
        date = new Date(2020, 3, 6, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 7, 10, 30, 0, 0);
        length = 0.5;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 03.04.2020 when current date is 8:15 03.04.2020 and work takes 1 hours', () => {
        date = new Date(2020, 3, 3, 8, 15, 0, 0);
        expectDate = new Date(2020, 3, 3, 11, 0, 0, 0);
        length = 1;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 14.04.2020 when current date is 21:47 03.04.2020 and work takes 55 hours', () => {
        date = new Date(2020, 3, 3, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 14, 11, 0, 0, 0);
        length = 55;
        //expect(countHelper.getfinalDate(length, date));
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 14.04.2020 when current date is 8:15 05.04.2020 and work takes 55 hours', () => {
        date = new Date(2020, 3, 5, 8, 15, 0, 0);
        expectDate = new Date(2020, 3, 14, 11, 0, 0, 0);
        length = 55;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 14.04.2020 when current date is 12:00 04.04.2020 and work takes 55 hours', () => {
        date = new Date(2020, 3, 4, 12, 0, 0, 0);
        expectDate = new Date(2020, 3, 14, 11, 0, 0, 0);
        length = 55;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 7.04.2020 when current date is 21:47 04.04.2020 and work takes 10 hours', () => {
        date = new Date(2020, 3, 4, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 7, 11, 0, 0, 0);
        length = 10;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 12:00 22.04.2020 when current date is 8:15 04.04.2020 and work takes 110 hours', () => {
        date = new Date(2020, 3, 4, 8, 15, 0, 0);
        expectDate = new Date(2020, 3, 22, 12, 0, 0, 0);
        length = 110;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 14:00 22.04.2020 when current date is 12:00 06.04.2020 and work takes 110 hours', () => {
        date = new Date(2020, 3, 6, 12, 0, 0, 0);
        expectDate = new Date(2020, 3, 22, 14, 0, 0, 0);
        length = 110;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 12:00 22.04.2020 when current date is 21:47 03.04.2020 and work takes 110 hours', () => {
        date = new Date(2020, 3, 3, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 22, 12, 0, 0, 0);
        length = 110;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 10:30 6.04.2020 when current date is 12:00 05.04.2020 and work takes 0.5 hours', () => {
        date = new Date(2020, 3, 5, 12, 0, 0, 0);
        expectDate = new Date(2020, 3, 6, 10, 30, 0, 0);
        length = 0.5;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 7.04.2020 when current date is 8:15 05.04.2020 and work takes 10 hours', () => {
        date = new Date(2020, 3, 5, 8, 15, 0, 0);
        expectDate = new Date(2020, 3, 7, 11, 0, 0, 0);
        length = 10;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 7.04.2020 when current date is 8:15 06.04.2020 and work takes 10 hours', () => {
        date = new Date(2020, 3, 6, 8, 15, 0, 0);
        expectDate = new Date(2020, 3, 7, 11, 0, 0, 0);
        length = 10;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 13:00 14.04.2020 when current date is 12:00 06.04.2020 and work takes 55 hours', () => {
        date = new Date(2020, 3, 6, 12, 0, 0, 0);
        expectDate = new Date(2020, 3, 14, 13, 0, 0, 0);
        length = 55;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 10:30 06.04.2020 when current date is 8:15 04.04.2020 and work takes 0.5 hours', () => {
        date = new Date(2020, 3, 4, 8, 15, 0, 0);
        expectDate = new Date(2020, 3, 6, 10, 30, 0, 0);
        length = 0.5;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 06.04.2020 when current date is 21:47 04.04.2020 and work takes 1 hours', () => {
        date = new Date(2020, 3, 4, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 6, 11, 0, 0, 0);
        length = 1;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 13:00 06.04.2020 when current date is 12:00 06.04.2020 and work takes 1 hours', () => {
        date = new Date(2020, 3, 6, 12, 0, 0, 0);
        expectDate = new Date(2020, 3, 6, 13, 0, 0, 0);
        length = 1;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 11:00 06.04.2020 when current date is 21:47 05.04.2020 and work takes 1 hours', () => {
        date = new Date(2020, 3, 5, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 6, 11, 0, 0, 0);
        length = 1;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 10:30 06.04.2020 when current date is 21:47 03.04.2020 and work takes 0.5 hours', () => {
        date = new Date(2020, 3, 3, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 6, 10, 30, 0, 0);
        length = 0.5;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
    test('get final date 12:00 22.04.2020 when current date is 8:15 05.04.2020 and work takes 110 hours', () => {
        date = new Date(2020, 3, 3, 21, 47, 0, 0);
        expectDate = new Date(2020, 3, 22, 12, 0, 0, 0);
        length = 110;
        expect(countHelper.getfinalDate(length, date)).toStrictEqual(expectDate);
    });
});
