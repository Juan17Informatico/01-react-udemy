

/**
 * TEMPLATE STRING
 */
const nombre = 'Juan';
const apellido = 'Campuzano';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Eres ${getSaludo(nombreCompleto)}`);