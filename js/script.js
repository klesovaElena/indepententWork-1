//Условное ветвление
//if (строка с нулём)
if ("0") {
    alert( 'Привет' );
  }// да
//Название JavaScript
'use strict';

let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}
//Покажите знак числа
let value1 = prompt('Введите число', 0);

if (value1 > 0) {
  alert( 1 );
} else if (value1 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}
//Перепишите 'if' в '?'
// result = (a + b < 4) ? 'Мало' : 'Много';
//Перепишите 'if..else' в '?'
/*let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';*/

//Типы данных
let name = "Ilya";

alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//Преобразование типов
let userName = "Ilya";
userName = Number(userName);
console.log(userName); // Nan
console.log(typeof userName); // number

let userAge;
userAge = Number(userAge);
console.log(userAge); // Nan

userAge = Boolean(userAge); 
console.log(userAge); // false
userName = Boolean(userName); 
console.log(userName); // false

//Числа 
// Сумма пользовательских чисел
let numOne = +prompt("Введите первое число", '');
let numTwo = +prompt("Введите второе число", '');
alert( sum = numOne + numTwo );

// Почему 6.35.toFixed(1) == 6.3?
alert( Math.round(6.35 * 10) / 10 );

// Ввод числового значения
function readNumber() {
   let number;
   do {
       number = prompt("Введите число", 0);
   } while ( !isFinite(number) );

   if (number === null || number === '') return null;

   return +number;
}
   alert(`Число: ${readNumber()}`); 


// Бесконечный цикл по ошибке    
/*let i = 0;
while (i !=10) {
    i += 0.2;
} */ //Цикл бесконечный из-за потери точности. 

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

// Случайное число от min до max
function random(min, max){
    return min + Math.random() * (max - min);

}

alert ( random(1, 5) );
alert ( random(1, 5) );
alert ( random(1, 5) );

// Случайное целое число от min до max
function randomInteger(min, max){
    return Math.round( min - 0.5 + Math.random() * (max - min + 1));
}

alert ( randomInteger(1, 5) );
alert ( randomInteger(1, 5) );
alert ( randomInteger(1, 5) );

//Строки 
// Сделать первый символ заглавным
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
alert( ucFirst("вася") );

// Проверка на спам
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//Усечение строки
function truncate(str, maxlength){
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1)+ '...' : str;
}
alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

//Выделить число

function extractCurrencyValue(str) {
   return +str.slice(1); 
}
alert( extractCurrencyValue('$120') );

//Даты и время
// Создайте дату
let d = new Date(2012, 1, 20, 3, 12);
alert( d );

//Покажите день недели
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); 
  alert( getWeekDay(date) ); 

  //День недели в европейской нумерации
  function getLocalDay(date1) {

    let day = date1.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
  let date1 = new Date(2012, 0, 3);  
  alert( getLocalDay(date1) ); 
  
  //Какой день месяца был много дней назад?
  function getDateAgo(date2, days2) {
    let dateCopy = new Date(date2);
  
    dateCopy.setDate(date2.getDate() - days2);
    return dateCopy.getDate();
  }
  
  let date2 = new Date(2015, 0, 2);
  
  alert( getDateAgo(date2, 1) ); 
  alert( getDateAgo(date2, 2) ); 
  alert( getDateAgo(date2, 365) );

  //Последнее число месяца?
  function getLastDayOfMonth(year, month) {
    let a = new Date(year, month + 1, 0);
    return a.getDate();
  }
    alert( getLastDayOfMonth(2012, 1) ); 

    //Сколько сегодня прошло секунд?
    function getSecondsToday() {
        let d = new Date();
        return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
      }
      alert( getSecondsToday() );

    //Сколько секунд осталось до завтра?
    function getSecondsToTomorrow() {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
        let totalSecondsInADay = 86400;
      
        return totalSecondsInADay - totalSecondsToday;
      }
      alert( getSecondsToTomorrow() );

      //Форматирование относительной даты
      function formatDate(date) {
        let diff = new Date() - date; 
      
        if (diff < 1000) { 
          return 'прямо сейчас';
        }
      
        let sec = Math.floor(diff / 1000); 
      
        if (sec < 60) {
          return sec + ' сек. назад';
        }
      
        let min = Math.floor(diff / 60000); 
        if (min < 60) {
          return min + ' мин. назад';
        }
        let d = date;
        d = [
          '0' + d.getDate(),
          '0' + (d.getMonth() + 1),
          '' + d.getFullYear(),
          '0' + d.getHours(),
          '0' + d.getMinutes()
        ].map(component => component.slice(-2)); 
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
      }
      
      alert( formatDate(new Date(new Date - 1)) ); 
      
      alert( formatDate(new Date(new Date - 30 * 1000)) ); 
      
      alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
    
      alert( formatDate(new Date(new Date - 86400 * 1000)) );

      //Базовые операторы
      //Постфиксная и префиксная формы
      let a = 1, b = 1;

    let c = ++a; // 2 : c=2 a=2
    let d1 = b++; // 1 : d1=1 b=2
    alert( ++a );
    alert( b++ );

    //Результат присваивания
    let a1 = 2;

    let x = 1 + (a1 *= 2);// x=5 a1=4
    alert( a1 );
    alert( x );

    //Преобразование типов
   /* "" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3"// 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // "-9 5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2*/

//Исправьте сложение
let aNew = +prompt("Первое число?", 1);
let bNew = +prompt("Второе число?", 2);

alert(aNew + bNew);

//Логические операторы
//Что выведет alert (ИЛИ)?
alert( null || 2 || undefined ); // 2
//Что выведет alert (ИЛИ)?
alert( alert(1) || 2 || alert(3) ); // 1 , 2
//Что выведет alert (И)?
alert( 1 && null && 2 ); // null
//Что выведет alert (И)?
alert( alert(1) && alert(2) ); // 1, undefined
//Что выведет этот код?
alert( null || 2 && 3 || 4 ); // 3
//Проверка значения из диапазона
let age;
if (age >= 14 && age <= 90);
//Проверка значения вне диапазона
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);
//Вопрос о "if"
if (-1 || 0) alert( 'first' );// -1, выполнится 
if (-1 && 0) alert( 'second' );//0, не выполнится
if (null || -1 && 1) alert( 'third' );//1 выполнится
//Проверка логина
let userName2 = prompt("Кто там?", '');

if (userName2 == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName2 == '' || userName2 == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

//Операторы сравнения
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" //false