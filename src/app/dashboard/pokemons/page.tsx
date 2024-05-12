import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import Image from 'next/image';
import { notFound } from "next/navigation";

export const metadata = {
    title: "Pagina del pokemon",
    description: "Pagina de un pokemon cualquiera",
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}151&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    //throw new Error('Error al obtener los pokemons');
    //throw notFound();

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className='flex flex-col items-center py-8 justify-center min-h-screen from-gray-300 via-greeen-300 to-blue-500 bg-gradient-to-br'>

            <span className="text-center p-6 text-7xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">
                Listado de Pokémon
            </span>

            <PokemonGrid pokemons={pokemons} />

        </div>
    );
}