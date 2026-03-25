"use server";

import { cacheLife, cacheTag, updateTag } from "next/cache";

export async function cachePokemon(pokemonId: string | number) {
  cacheLife("max");
  cacheTag(`pokemon-${pokemonId}`);
}

export async function clearPokemonFromCache(pokemonId: string | number) {
  updateTag(`pokemon-${pokemonId}`);
}
