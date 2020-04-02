exports.getPrice = function (countOfSymbols, language) { //ф-ция для определения стоимости
  let priceForSymbol, price;
  if (language === "ru" || language === "ua") {
    priceForSymbol = 0.05;
  } else if (language === "en") {
    priceForSymbol = 0.12;
  } else {
    return 0;
  }
  if (countOfSymbols <= 0) {
    return 0;
  } else if (countOfSymbols < 1000) {
    price = 1000 * priceForSymbol;
  } else {
    price = countOfSymbols * priceForSymbol;
  }
  return price;
};





exports.getTime = function (countOfSymbols, language) { //ф-ция для определения затраченного времени
  let timeForSymbol, time;
  if (language === "ru" || language === "ua") {
    timeForSymbol = 1333;
  } else if (language === "en") {
    timeForSymbol = 333;
  } else {
    return 0;
  }
  if (countOfSymbols > 0) {
    time = 0.5 + countOfSymbols / timeForSymbol;
    if (time < 1) {
      time = 1;
    }
  } else {
    return 0;
  }
  return time;
};





exports.isExpensive = function (format) { // ф-ция для проверки формата файла
  if (format === "docx" || format === "doc" || format === "rtf") {
    return true;
  }
  else {
    return false;
  }
};






const slavicGetDay = function (numb) { // ф-ция для перевода дней недели в "славянскую" систему координат
  let weekdays = [6, 0, 1, 2, 3, 4, 5]
  return weekdays[numb];
}





exports.output = function (price, time) {
  let todayDate = new Date();
  let finalDate = getfinalDate(time, todayDate);
  let result = `Спасибо! Стоимость Вашего заказа: ${Math.round(price, 0)}  грн. Вы можете забрать его в ${outputHelper(finalDate.getHours())}:${outputHelper(finalDate.getMinutes())} ${outputHelper(finalDate.getDate())}.${outputHelper(finalDate.getMonth() + 1)}. ${finalDate.getFullYear()}`;
  return result;
}







const getfinalDate = function (allTimeInHours, todayDate) { //ф-ция для подсчета даты, когда продукт будет готов

  let countOfHolidays = 0;
  let countOfWeeks = 0;
  let countOfWorkingDays = 0;
  let timeInDays = Math.floor(allTimeInHours / 9);

  let timeInHoursPerDay = convertDaysToMs(0, allTimeInHours % 9, 0, 0, 0);
  let todayDateHourMs = convertDaysToMs(0, todayDate.getHours(), todayDate.getMinutes(), 0, 0);
  let resultTimeInMs = 0;
  if (todayDateHourMs < convertDaysToMs(0, 10, 0, 0, 0) || slavicGetDay(todayDate.getDay()) >= 5) {// Случай когда сделан раньше 10.00 АМ или в выходной день
    resultTimeInMs = convertDaysToMs(0, 10, 0, 0, 0) + timeInHoursPerDay;
  } else if (todayDateHourMs > convertDaysToMs(0, 19, 0, 0, 0)) { // Случай когда сделан позже 7.00 РМ 
    resultTimeInMs = convertDaysToMs(0, 10, 0, 0, 0) + timeInHoursPerDay;
    timeInDays++;
  } else if ((todayDateHourMs + timeInHoursPerDay) > convertDaysToMs(0, 19, 0, 0, 0)) { // Случай когда заказ выполняется позже 7.00 РМ 
    resultTimeInMs = todayDateHourMs + timeInHoursPerDay - convertDaysToMs(0, 9, 0, 0, 0);
    timeInDays++;
  } else { //Заказ сделан в период с 9.00 АМ до 7.00 РМ в будний день
    resultTimeInMs = todayDateHourMs + timeInHoursPerDay;
  }

  if ((timeInDays + slavicGetDay(todayDate.getDay()) >= 5)) { // в данном блоке получаем кол-во недель, которые потребуются на реализацию заказа
    if (slavicGetDay(todayDate.getDay()) >= 5) { // в данном блоке обрабатываем случай, если заказ сделан в выходной день
      countOfWeeks = Math.floor(timeInDays / 5);
      countOfHolidays = 7 - slavicGetDay(todayDate.getDay());
    } else { // в данном блоке обрабатываем случай, если заказ сделан в рабочий день
      countOfWeeks = Math.floor((timeInDays + slavicGetDay(todayDate.getDay())) / 5);
    }
  }

  countOfWorkingDays = countOfHolidays + countOfWeeks * 2 + timeInDays; // получаем кол-во  дней, которые уйдут на реализацию заказа с учетом выходных

  let dateWithDayMs = todayDate.getTime() + convertDaysToMs(countOfWorkingDays, 0, 0, 0, 0) + resultTimeInMs - todayDateHourMs;
  let dateWithDay = new Date(dateWithDayMs);
  return dateWithDay;
};

exports.getfinalDate = getfinalDate;


const outputHelper = function (num) {//функция для красоты вывода
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}




const convertDaysToMs = function (days, hours, min, sec, ms) {// конвертер из дней в мс
  return (((days * 24 + hours) * 60 + min) * 60 + sec) * 1000 + ms;
}


