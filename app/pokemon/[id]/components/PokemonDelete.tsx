"use client";

import { useRouter } from "next/navigation";
import { clearPokemonFromCache } from "../../pokemon-cache";
import { deletePokemon } from "../../pokemon-service";
import { Pokemon } from "../../pokemon-types";

type Props = {
  pokemon: Pokemon;
};

export function PokemonDelete({ pokemon }: Props) {
  const router = useRouter();

  /*
    When you clear the cache before router push it fails.
    When you push first and clear the cache later the test succeed!
  */

  async function onPokemonDeleteFails() {
    await deletePokemon(pokemon);

    await clearPokemonFromCache(pokemon.id);

    router.push("/pokemon");
  }

  async function onPokemonDeleteSucceeds() {
    await deletePokemon(pokemon);

    router.push("/pokemon");

    await clearPokemonFromCache(pokemon.id);
  }

  return (
    // Swap with `onPokemonDeleteSucceeds` to see the test work.
    <button type="button" onClick={onPokemonDeleteFails}>
      Delete pokemon
    </button>
  );
}
