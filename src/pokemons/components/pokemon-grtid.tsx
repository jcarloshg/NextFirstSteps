import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./pokemon-card";


export interface PokemonGridProps {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map(
                    (pokemon) => (
                        <PokemonCard key={pokemon.id} simplePokemon={pokemon} />
                    )
                )
            }
        </div>
    )
}
