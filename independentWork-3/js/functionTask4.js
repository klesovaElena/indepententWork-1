let x = prompt("Число?", '');
let n = prompt("Степень?", '');
function pow(x,n) {
  if (n > 1) {
    return x ** n;
  } else{
    alert("n должно быть натуральным!");
  }
}
console.log(pow(x,n));



