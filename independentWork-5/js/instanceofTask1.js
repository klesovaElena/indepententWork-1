function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
// Потому что instanceof использует для проверки правило obj._proto_ === Class.prototype