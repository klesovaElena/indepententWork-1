//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = funCounter(hello);
function funCounter(name) {
  let count = 0;
  return function () {
    name();
    count++;
    return `${count}`;
  };
}

console.log(counter());
console.log(counter());
console.log(counter());

function hello() {
  return "hello ben";
}
//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = logFunction(sum);

function logFunction(name) {
  return function (num1) {
    return function (num2) {
      let result = name(num1, num2);
      return `${name} (${num1},${num2}) ${result}`;
    };
  };
}

console.log(logger(1)(2));
console.log(logger(4)(5));

function sum(a, b) {
  return a + b;
}
//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = curryFunction(summ);

function curryFunction(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function summ(a, b, c, d) {
  return a + b + c + d;
}
console.log(curry(2, 7)(10)(5));
