let x = prompt("Введите число x");
let n = prompt("Введите степень n, в которую хотите возвести число x");

console.log("Пользователь сказал, что x=" + x);
console.log("Пользователь хочет возвести x в " + n + " степень");

 function pow(x, n) {
    return x ** n;
}

if (n % 1 == 0) {
    alert(pow(x, n));
} else {
    alert(`${n} не является натуральным числом`);
}




