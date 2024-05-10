import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import Image from 'next/image';
import { notFound } from "next/navigation";

export const metadata = {
    title: "Favoritos",
    description: "Pagina de favoritos",
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col" >

            <span className="text-center p-6 text-7xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">
                Pokémons Favoritos
            </span>

            <PokemonGrid pokemons={[]} />

        </div>
    );
}