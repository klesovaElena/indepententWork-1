function sum() { 
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { 
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

function applyAll(func) {
  return func.apply(this, [].slice.call(arguments));
}

alert( applyAll(sum, 1, 2, 3) ); 
alert( applyAll(mul, 2, 3, 4) ); 
alert( applyAll(Math.max, 2, -2, 3) ); 
alert( applyAll(Math.min, 2, -2, 3) ); 


