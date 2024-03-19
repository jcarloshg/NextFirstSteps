import { FavoritePokemons, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
    title: "Favoritos",
    description: "Mi pokemons favoritos"
}


export default async function PokemonsPage() {

    return (
        <div>

            <span className="text-5xl my-2">
                Pokemons favoritos <small className="text-blue-500">Global state</small>
            </span>

            {/* <PokemonGrid pokemons={[]} /> */}

            <FavoritePokemons />
            {/* <NoFavorites /> */}

        </div>
    );
}
