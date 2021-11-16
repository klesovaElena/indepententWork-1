function sumArgs() {
  arguments.reduce =  [].reduce;
  let sum = arguments.reduce((a,b) => a + b);
  return sum;
}

alert( sumArgs(1, 2, 3) );

