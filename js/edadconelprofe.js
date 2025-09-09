// 4 formas de mostrar contenido
// (1) Alert
// alert("HOLA BIENVENIDO");
// (2) La consola
// console.log("HOLA BIENVENIDO")
// // (3) libreria sweet
// // Swal.fire("SweetAlert2 is working!");
// //(4) en el Dom => modelo de objetos del documento
// document.write("Hola desde el dom"); 

// // ### tipos de variables
// var edad =33; //alcance global
// let num =33; // alcance bloque
// const nombre = "Roman Urquijo"; //no cambia su valor
// const pi = 3.14; //no cambia su valor
// const pulgada = 2.54; //no cambia su valor

// ###### OPERADORES BASICOS
// ARITMETICOS (+, -, *, / -%)
var num_uno = 5;
var num_dos = 10;
// console.log(num_dos+num_uno);
// console.log(num_dos-num_uno);
// console.log(num_dos/num_uno);
// console.log(num_dos*num_uno);
// console.log(num_dos%num_uno);


// comparacion
// console.log("igual >>>" + (num_dos==num_dos))
// console.log("estricto igual>>>" + (num_dos===num_dos))
// console.log("diferente >>>" + (num_dos!=num_dos))
// console.log("mayor >>>" + (num_dos>num_dos))
// console.log("mayor igual >>>" + (num_dos>=num_dos))
// console.log("menor >>>" + (num_dos<num_dos))
// console.log("menor igual >>>" + (num_dos<=num_dos))

// TIPOS DE DATOS 
var clase = "prog. basica" // string
var numero = 5 // Numero entero
var decimal = 2.5 // numero decimal
var Booleano = true // Boolean (false/true)
var objeto = {nombre: "Roman", edad:25, profesion:"ingeniero"};
var array = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1, "uno", 20, "fiesta", 2.5, "decimal"];


let estudiantes = [
    {nombre: "Roman", edad: "25"},
    {nombre: "Maria Isabell", edad: "2"},
    {nombre: "Silvia", edad: "23"},
    {nombre: "Irman", edad: "59"},
    {nombre: "Yusneidy", edad: "40"},
];

let curso ={
    nombre: "programacion",
    temas: ["HTML", "CSS", "JS"]
};

console.log(objeto);
console.log(array);
console.log(array[5]);
console.log(array_mix);
console.log(estudiantes);
console.log(estudiantes[1]);
console.log(estudiantes[1].nombre);
console.log(curso);
console.log(curso.temas);
console.log(curso.temas[1]);

