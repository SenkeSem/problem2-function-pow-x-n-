let x = prompt("Введите число x", 14);
let n = prompt("Введите степень, в которую хотите возвести число x", 2);

console.log(x);
console.log(n);

console.log("Пользователь сказал, что x=" + x);
console.log("Пользователь хочет возвести x в " + n + " степень");

 function pow(x, n) {
    return Math.pow(x, n);
}

console.log("Результат вычисления функции: " + pow(x, n));