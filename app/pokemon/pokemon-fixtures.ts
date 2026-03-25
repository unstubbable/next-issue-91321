import { randBetween } from "../utils";
import { Pokemon } from "./pokemon-types";

export function makeMew(): Pokemon {
  return {
    id: '151',
    name: 'Mew',
    sprites: {
      front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png',
    },
    height: randBetween(1, 255),
  };
}

export function makeBulbasaur(): Pokemon {
  return {
    id: '1',
    name: 'Bulbasaur',
    sprites: {
      front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    },
    height: randBetween(1, 255),
  };
}

export function makeIvysaur(): Pokemon {
  return {
    id: '2',
    name: 'Ivysaur',
    sprites: {
      front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
    },
    height: randBetween(1, 255),
  };
}

export function makeVenusaur(): Pokemon {
  return {
    id: '3',
    name: 'Venusaur',
    sprites: {
      front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
    },
    height: randBetween(1, 255),
  };
}

