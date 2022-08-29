/*EJECICIOS */
//Primer código.
const saludar=(nombre)=>{return `Hola  ${nombre}`; }
console.log(saludar('Alejandro'))

//Segundo Códiggo.
const multiplicar=(a, b)=>{return a+b;}

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))

//Tercer Código.
const crearAlumno=(nombre, apellido, edad, materias)=>{
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
}

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))

//Cuarto Código.
function devolverFecha(a,b,c){
    return `Hoy es ${a}/${b}/${c}`;
}

// Mostrar el resultado por consola.
console.log(devolverFecha('10','09','2022'))