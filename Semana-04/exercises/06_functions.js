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
    if (typeof(num1 + num2) !== 'number') {
        alert('b - Both parameters must be numeric');
    }
    return Number(num1) + Number(num2);
}

var result = sumB(3, 'pedro');
console.log(result)

var result = sumB(3, 7);
console.log(result)

/* c - Aparte, crear una función validate Integer que reciba
un número como parámetro y devuelva verdadero si es un número entero. */

console.log('-Exercise 6.c:');

function validateInteger(num) {
    return num % 1 === 0;
}

var result = validateInteger(3.5);
console.log(result);

var result = validateInteger(2);
console.log(result);

/* d - A la función suma del ejercicio 6b) agregarle una llamada a la
función del ejercicio 6c. y que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y
retornar el número convertido a entero (redondeado). */

console.log('-Exercise 6.d:');

function sumD(num1, num2) {
    if (typeof(num1 + num2) !== 'number') return alert('d - Both parameters must be numeric');
    if (validateInteger(num1) & validateInteger(num2)) return Number(num1) + Number(num2);
    else {
        alert ('d - Both numbers must be integers');
        console.log(`d - Rounded numbers are ${Math.round(Math.round(Number(num1)))} and ${Math.round(Number(num2))}`);
    }
}

var result = sumD(4, '5');
console.log(result);

var result = sumD(8.5, 3);
console.log(result);

var result = sumD(8, 3);
console.log(result);

/* e - Convertir la validación del ejercicio 6d) en una función separada
y llamarla dentro de la función suma probando que todo siga funcionando igual.
 */

console.log('-Exercise 6.e:');

function isANumberAndInteger(num1, num2) {
    if ((typeof(num1 + num2) == 'number') && (validateInteger(num1) && validateInteger(num2))) {
    return true;
    }
    else if (typeof(num1 + num2) !== 'number') {
        return alert(' e - Both parameters must be numbers');
    }
    else if (!(validateInteger(num1) && validateInteger(num2))) {
        alert ('e - Both numbers must be integers');
        console.log(`Rounded numbers are ${Math.round(num1)} ${Math.round(num2)}`);
        return `Rounded numbers are ${Math.round(num1)} ${Math.round(num2)}`;
    }
}

function sumE(num1, num2) {
    isANumberAndInteger(num1, num2);
    return Number(num1) + Number(num2);
}

var result = sumE(5.6, 2);
console.log(result);

var result = sumE('hola', 2);
console.log(result);

var result = sumE(8, 2);
console.log(result);