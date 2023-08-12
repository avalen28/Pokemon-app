import React, { useState } from 'react';
import axios from "axios";
import { PokemonInfo } from '../interfaces/pokemon';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';

const SearchView = () => {
    const [pokemon, setPokemon] = useState({})

    const handleSearchPokemon = (searchPokemon: string) => {
        getPokemonFromApi(searchPokemon)

    }
    const getPokemonFromApi = async (searchPokemon: string) => {
        try {
            const dataFromApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`);
            const pokemonFromApi: PokemonInfo = dataFromApi.data;
            setPokemon(pokemonFromApi)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <SearchInput onHandleSearchPokemon={handleSearchPokemon} />
            <PokemonCard pokemon={pokemon} />
        </div>
    );
};

export default SearchView;