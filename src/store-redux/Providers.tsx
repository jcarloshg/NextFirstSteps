'use client';

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

export interface ProvidersProps {
    children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {


    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');
        store.dispatch(setFavoritePokemons(favorites));
    }, [])


    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}