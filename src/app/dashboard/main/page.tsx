export const metadata = {
    title: "By PoolDM",
    description: "Hola payaso",
};

export default function MainPage() {
    return (
        <div className='flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
                <div className='max-w-md mx-auto space-y-6'>

                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">Hola</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">Pokedex</p>
                            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Mira más de 150 pokemons. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}