'use client'

import React, { useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState(favoritePokemons);



    return (<>
        {/* <PokemonGrid pokemons={favoritePokemons} /> */}
        {
            pokemons.length === 0
                ? (<NoFavorites />)
                : (<PokemonGrid pokemons={pokemons} />)
        }
        {/* <PokemonGrid pokemons={pokemons} /> */}
    </>
    )
}


export const NoFavorites = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-40">
            <IoHeartOutline size={100} className='text-primary-600 dark:text-primary-500 text-blue-500' />
            <span className="text-center p-6 text-2xl tracking-tight font-extrabold lg:text-2xl text-primary-600 dark:text-primary-500">
                No tienes pokémons favoritos
            </span>
        </div>
    )
}