// Crear un array simple
const numeros = [1, 2, 3, 4, 5];
// var consulta = pront...consulta...
var nombre = [ "Maria" , "Pedro" , "Rodrigo"]
// Imprimir cada elemento del array
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);

    // console.log(consulta, nombre[2]);
}

// Imprimir el array completo
console.log("Array completo:", numeros);










 // Crear un array de cadenas
 const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];

 // Imprimir cada elemento del array usando forEach
 nombres.forEach(function(nombre) {
     console.log(nombre[2]);
 });

 // Imprimir el array completo
 console.log("Array completo:", nombres);








// var nombre = prompt
  // Crear un array de objetos
  const usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 28 }
];

// Imprimir cada objeto del array y sus propiedades
for (let i = 0; i < usuarios.length; i++) {
    console.log("Nombre:", usuarios[i].nombre, ", Edad:", usuarios[i].edad);
}

// Imprimir el array completo
console.log("Array completo:", usuarios);








 // Crear un array multidimensional
 const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Imprimir cada fila y cada elemento de la matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("Elemento [" + i + "][" + j + "]:", matriz[i][j]);
    }
}

// Imprimir la matriz completa
console.log("Matriz completa:", matriz);




