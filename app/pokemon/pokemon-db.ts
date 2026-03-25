import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

import { notFound } from 'next/navigation';

import { Pokemon } from './pokemon-types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonFileName = `${__dirname}/pokemons.json`;

export async function getPokemons(): Promise<Pokemon[]> {
  const file = readFileSync(jsonFileName, 'utf8');

  const allPokemon: Pokemon[] = JSON.parse(file);

  return allPokemon;
}

export async function getPokemon(id: string) {
  const allPokemon = await getPokemons();

  const pokemon = allPokemon.find((pokemon) => pokemon.id === id);

  if (!pokemon) {
    notFound();
  } else {
    return pokemon;
  }
}

export async function deletePokemon(id: string) {
  const allPokemon = await getPokemons();

  const remaining = allPokemon.filter((pokemon) => pokemon.id !== id);

  writePokemons(remaining);
}

function writePokemons(allPokemon: Pokemon[]) {
  writeFileSync(jsonFileName, JSON.stringify(allPokemon));
}
