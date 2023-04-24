let x = prompt("Введите число x", 14);
let n = prompt("Введите степень, в которую хотите возвести число x", 2);

console.log("Пользователь сказал, что x=" + x);
console.log("Пользователь хочет возвести x в " + n + " степень");

 function pow(x, n) {
    return Math.pow(x, n);
}

alert(pow(x, n));