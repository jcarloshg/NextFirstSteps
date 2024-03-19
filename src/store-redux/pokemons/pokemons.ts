import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

const getInitialState = () => {
    // if (typeof localStorage == 'undefined') return {}
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}');
    return favorites;
}

const initialState: PokemonsState = {
    favorites: {}
    // '1': { id: '1', name: 'Bulbasor' },
    // '4': { id: '4', name: 'Charmander' },
    // '7': { id: '7', name: 'Squirtle' },
}

const PokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        },

        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

            const pokemon = action.payload;
            const { id } = pokemon;

            !!state.favorites[id]
                ? delete state.favorites[id]
                : state.favorites[id] = pokemon;


            localStorage.setItem('favorite-pokemon', JSON.stringify(state.favorites));

        }
    },
});

export const { toggleFavorite, setFavoritePokemons } = PokemonsSlice.actions

export default PokemonsSlice.reducer