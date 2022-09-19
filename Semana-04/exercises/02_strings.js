console.log('--EXERCISE 2: STRINGS');

// a - Crear una variable de tipo string con al menos 10 caracteres y
// convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var textStr = 'Hi, I am Radium Rocket';

console.log(textStr.toUpperCase());

// b - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
// 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var textStr = 'Hi, I am Radium Rocket';
var textFirstCharactersStr = textStr.substring(0, 5);

console.log(textFirstCharactersStr)

/*  c- Crear una variable de tipo string con al menos 10 caracteres y generar un
    nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.c:');

var textStr = 'Hi, I am Radium Rocket';
var textFirstCharactersStr = textStr.substring(textStr.length - 3);

console.log(textFirstCharactersStr)

/* d - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 2.d:');

var textStr = 'hi, I am Radium Rocket';

var result = textStr.substring(0, 1).toUpperCase() + textStr.substring(1, textStr.length).toLowerCase();

console.log(result)

/* e-  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('-Exercise 2.e:');

var textStr = 'Hi, I am Radium Rocket';
var firstBlankSpace = textStr.indexOf(" ");

console.log(firstBlankSpace)

/*  f -Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
    letra de ambas palabras en mayúscula y las demás letras en minúscula
     (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.f:');


var textStr = 'Pedro is a sleepwalker and hypochondriac and usually feels very bad';

var result = textStr.substring(0, textStr.indexOf('sleepwalker')).toLocaleLowerCase() +
            textStr.substring(textStr.indexOf('sleepwalker'), textStr.indexOf('sleepwalker') + 1).toUpperCase() +
            textStr.substring(textStr.indexOf('sleepwalker') + 1, textStr.indexOf('hypochondriac')).toLowerCase() +
            textStr.substring(textStr.indexOf('hypochondriac'), textStr.indexOf('hypochondriac') + 1).toUpperCase() +
            textStr.substring(textStr.indexOf('hypochondriac') + 1, textStr.length).toLowerCase();

console.log(result)

