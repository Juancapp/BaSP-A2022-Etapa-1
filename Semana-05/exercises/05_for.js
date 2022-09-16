console.log('--EXERCISE 5: IF ELSE');

// a  Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

console.log('-Exercise 5.a:');

var arr = ['dog', 'cat', 'giraffe', 'lion', 'tiger'];

for (let i = 0; i < arr.length; i++) {    
    var element = arr[i];
    alert(element);
}

// b - Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

console.log('-Exercise 5.b:');

for (let i = 0; i < arr.length; i++) {    
    var element = arr[i];;
    mayusElement = element.slice(0, 1).toUpperCase() + element.slice(1);
    alert(mayusElement);
}

// c - Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto
// a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
// Al final mostrar una única alerta con la cadena completa.

console.log('-Exercise 5.c:');

var sentence = '';

for (let i = 0; i < arr.length; i++) {    
    var element = arr[i];
    sentence += ' ' + element;
}

alert(sentence);

/* d - Crear una array vacío y con un bucle for de 10 repeticiones. 
Llenar el array con el número de la repetición, es decir que al final de la ejecución
del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. 
Mostrar por la consola del navegador el array final (utilizar console.log). */

console.log('-Exercise 5.d:');

arrEmpty = new Array();

for (let i = 0; i <= 9; i++) {    
    arrEmpty.push(i);
}

console.log(arrEmpty);










