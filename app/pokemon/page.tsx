import Link from 'next/link';
import { getPokemons } from './pokemon-db';
import { Suspense } from 'react';
import { connection } from 'next/server';

/** Add your relevant code here for the issue to reproduce */
export default function HomePage() {
  return (
    <Suspense>
      <PokemonList />
    </Suspense>
  );
}

export async function PokemonList() {
  await connection();

  const pokemons = await getPokemons();

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
