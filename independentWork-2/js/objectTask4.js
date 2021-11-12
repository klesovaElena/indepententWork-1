let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let summ = 0;
for (let key in salaries) {
    summ += salaries[key];
}
alert(summ);

