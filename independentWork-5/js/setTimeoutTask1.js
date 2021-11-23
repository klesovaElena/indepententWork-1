//1
function printNumbers(from, to) {
    let i = from;
    let delay = setInterval(() => 
    { alert(i);
        if (i == to) {
            clearInterval(delay);
        }
        i++;
    } , 1000)
    }

//printNumbers(4, 8);

//2
function printNumbersTwo(from, to) {
    let i = from;
    setTimeout(function f() {
    alert(i);
    if (i < to) {
        printNumbersTwo = setTimeout(f, 1000)
    }
    i++;
       }, 1000)
}
printNumbersTwo(6, 9);
