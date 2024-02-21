import heroes, { owners } from '../data/heroes';


export const getHeroeById = (id) => {

    return heroes.find((heroe) => {
        return heroe.id === id;
    });

}

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

const heroesByOwner = getHeroesByOwner('DC');

