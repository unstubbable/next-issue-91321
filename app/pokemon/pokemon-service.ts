'use server';

import {deletePokemon as deletePokemonFromDb }from './pokemon-db';
import { Pokemon } from './pokemon-types';

export async function deletePokemon(pokemon: Pokemon) {
  deletePokemonFromDb(pokemon.id);
}
