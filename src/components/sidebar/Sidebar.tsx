import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';
import Link from 'next/link';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización de datos'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemons',
        subTitle: 'Generación estática de páginas.'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Favoritos',
        subTitle: 'Global state.'
    },
]

export const Sidebar = () => {
    return (

        <div id="menu"
            style={{ width: '480px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            {/* <IoLogoReact className="mr-2 text-center" /> */}

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido, soy</p>
                <Link href="https://www.linkedin.com/in/ipool23/" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://media.licdn.com/dms/image/v2/D4E03AQF9e3zE-YYQkg/profile-displayphoto-shrink_400_400/B4EZciDzsGH0Ak-/0/1748623115128?e=1756944000&v=beta&t=6mY4E00lSviGz3hYXuyYp5QSPrq32cWQQXq5n8SdBSo"
                            alt="User avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Pool Deza Millones
                    </span>
                </Link>
            </div>


            <div id="nav" className="w-full px-6">

                {
                    menuItems.map((item) => (
                        <SidebarMenuItem
                            key={item.path} {...item}
                        />
                    ))
                }

            </div>
        </div>
    )
}
