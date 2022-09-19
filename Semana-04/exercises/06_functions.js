console.log('--EXERCISE 6: FUNCTIONS');

/* a - Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.
 */

console.log('-Exercise 6.a:');

function sumA(num1, num2) {
    return num1 + num2;
}

var result = sumA(1, 5);

console.log(result);

/* b - A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno
de los parámetros tiene error y retornar el valor NaN como resultado.

 */

console.log('-Exercise 6.b:');

function sumB(num1, num2) {
    if (typeof(num1 + num2) !== 'number') alert('b - Both parameters must be numeric');
    return console.log(Number(num1) + Number(num2));
}

sumB('pepe', 4);

/* c - Aparte, crear una función validate Integer que reciba
un número como parámetro y devuelva verdadero si es un número entero. */

console.log('-Exercise 6.c:');

function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(4));

/* d - A la función suma del ejercicio 6b) agregarle una llamada a la
función del ejercicio 6c. y que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y
retornar el número convertido a entero (redondeado). */

console.log('-Exercise 6.d:');

function sumD(num1, num2) {
    if (typeof(num1 + num2) !== 'number') return alert('d - Both parameters must be numeric');
    if (isInt(num1) & isInt(num2)) return console.log(Number(num1) + Number(num2));
    else {
        alert ('d - Both numbers must be integers');
        console.log(`d - Rounded numbers are ${Math.round(Math.round(Number(num1)))} and ${Math.round(Number(num2))}`);
    }
}

sumD(3, 2);
sumD('s', 2);
sumD(2.5, 5);

/* e - Convertir la validación del ejercicio 6d) en una función separada
y llamarla dentro de la función suma probando que todo siga funcionando igual.
 */

console.log('-Exercise 6.e:');

function isANumberAndInteger(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 1;
    if (!isInt(num1) || !isInt(num2)) return 2;
    if (typeof (num1) && typeof(num2)) return 3;
}

function sumE(num1, num2) {
    var isANumberandIntegerVar = isANumberAndInteger(num1, num2);
    if (isANumberandIntegerVar === 1) return alert ('e - Both parameters must be numbers');
    if (isANumberandIntegerVar === 2) return alert (`e - Both numbers must be integers.
    Rounded numbers are ${Math.round(Math.round(Number(num1)))} and ${Math.round(Number(num2))}`);
    if (isANumberandIntegerVar === 3) return console.log(Number(num1) + Number(num2));
}

sumE('peter', 2.5);