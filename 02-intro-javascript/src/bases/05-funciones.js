//Funciones

// const saludar = function(nombre){
//     return `Hola ${nombre}`;
// }

// const saludar2 = (nombre) =>{
//     return `Hola ${nombre}`;
// }

// console.log(saludar("Freezer"));
// console.log(saludar2("Goku"));

const getUser = () => ({
    uid: "ABC123",
    username: "Ado",
});

const user = getUser();

console.log(user);

//Tarea
//1. Transformen a una función de flecha
//2. Tiene que retornar un objeto implicíto
//3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: "ABC56",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("Adiós");
console.log(usuarioActivo);
