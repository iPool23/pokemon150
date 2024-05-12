import { FavoritePokemons } from '@/pokemons';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { IoHeartOutline } from 'react-icons/io5';

export const metadata = {
    title: "Favoritos",
    description: "Pagina de favoritos",
};

export default async function PokemonsPage() {

    return (

        <div className='flex flex-col items-center py-8 justify-center min-h-screen from-gray-300 via-greeen-300 to-blue-500 bg-gradient-to-br'>

            <span className="text-center p-6 text-7xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">
                Pokémons Favoritos
            </span>


            {/* <PokemonGrid pokemons={[]} /> */}
            <FavoritePokemons />

        </div>
    );
}
