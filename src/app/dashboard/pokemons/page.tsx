import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/index";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    const urlFormed = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const result: PokemonsResponse = await fetch(urlFormed).then(res => res.json());

    const pokemonsSimple: SimplePokemon[] = result.results.map(
        (pokemon) => {
            const id = pokemon.url.split('/').at(-2)!;
            const simplePokemon: SimplePokemon = {
                id: id,
                name: pokemon.name
            }
            return simplePokemon;
        }
    );

    // throw new Error('Este e sun error que no debería de suceder')

    return pokemonsSimple;
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div>

            <span className="text-5xl my-2">
                Listado de pokemons <small className="text-blue-500">estatico</small>
            </span>

            <PokemonGrid pokemons={pokemons} />

        </div>
    );
}