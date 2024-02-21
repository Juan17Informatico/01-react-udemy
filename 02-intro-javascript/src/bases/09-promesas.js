import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         //Tarea
//         const heroe = getHeroeById(1);
//         resolve(heroe);
//         // reject("No se puedo encontrar el heroe");
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            const heroe = getHeroeById(id);
            if (heroe) resolve(heroe);
            else reject("Persona no existe");

            // reject("No se puedo encontrar el heroe");
        }, 2000);
    });
};

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn);
