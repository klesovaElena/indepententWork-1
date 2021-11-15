let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
let {["John"]: a, ["Pete"]: b, ["Mary"]: c} = salaries;
let result = Math.max(a, b, c);
function topSalary(salaries) {
  if (a == 0 && b == 0 && с == 0) {
    return null;
  } else {
    for( [name, salary] of Object.entries(salaries)) {
          if (salary == result) {
        return name;
        console.log(name);
      }
    }
  }
}
topSalary(salaries);
console.log(a);
console.log(result);



