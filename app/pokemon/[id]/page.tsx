import { getPokemon } from '@/app/pokemon/pokemon-db';
import Link from 'next/link';
import { Suspense } from 'react';
import { cachePokemon } from '../pokemon-cache';
import { PokemonDelete } from './components/PokemonDelete';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function PokemonDetailPage(props: PageProps<'/pokemon/[id]'>) {
  return (
    <>
      <div style={{ display: 'flex', gap: '80px' }}>
        <Link href="/pokemon">Back</Link>

        <Suspense>
          <EditLink {...props} />
        </Suspense>
      </div>

      <Suspense>
        <PokemonDetail {...props} />
      </Suspense>
    </>
  );
}

async function EditLink(props: PageProps<'/pokemon/[id]'>) {
  const { id } = await props.params;

  return <Link href={`/pokemon/${id}/edit`}>Edit</Link>;
}

async function PokemonDetail(props: PageProps<'/pokemon/[id]'>) {
  'use cache';

  const { id } = await props.params;

  const pokemon = await getPokemon(id);

  cachePokemon(pokemon.id);

  return (
    <div>
      <h1>{pokemon.name}</h1>{' '}
      <p>
        Pokemon id is {id} height is {pokemon.height}
      </p>

      <PokemonDelete pokemon={pokemon} />
    </div>
  );
}
