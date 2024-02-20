const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 12213,
        lat: 14.12,
        lng: 137,
    },
};

const persona2 = {...persona}; 
persona2.nombre = "peter";

console.log({persona2, persona});
