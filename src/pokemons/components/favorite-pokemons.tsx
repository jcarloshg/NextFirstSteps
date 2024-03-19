'use client';

import { useAppSelector } from "@/store-redux";
import { PokemonGrid } from "./pokemon-grtid"
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => state.pokemons.favorites);
    const listFavoritePokemons = Object.values(favoritePokemons);

    // const [pokemonsToRender, setPokemonsToRender] = useState(listFavoritePokemons);

    // useEffect(() => {
    //     setPokemonsToRender(favoritePokemons);
    // }, [favoritePokemons])


    return (
        <>
            {
                listFavoritePokemons.length == 0
                    ? (<NoFavorites />)
                    : (<PokemonGrid pokemons={listFavoritePokemons} />)
            }
        </>

    )
}

export const NoFavorites = () => {

    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">

            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>

        </div>
    )

}