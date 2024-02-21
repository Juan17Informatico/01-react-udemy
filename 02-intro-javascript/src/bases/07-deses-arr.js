

//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

const {nombre, clave, edad} = persona;

console.log(`Hola ${nombre}, sé que tu eres, ${clave}`);
console.log(edad);


const otraCosa = ({nombre, edad, clave, rango = 'Capitán'}) => {
    

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123,
            lng: 312,
        }
    }
}

const {nombreClave, anios, latlng } = otraCosa(persona);
const {lat,lng} = latlng;

console.log(nombreClave, anios);
console.log(lat,lng);