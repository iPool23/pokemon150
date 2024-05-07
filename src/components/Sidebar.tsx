import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

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
]

export const Sidebar = () => {
    return (

        <div id="menu"
            style={{ width: '480px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            {/* <IoLogoReact className="mr-2 text-center" /> */}

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://scontent.fcix2-1.fna.fbcdn.net/v/t39.30808-6/434554966_3733860796846708_6538721917424852779_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jcr8aDY1zI0Q7kNvgHD4F6f&_nc_ht=scontent.fcix2-1.fna&oh=00_AfBFQmqtqNPZK9In_fkVp94-chJWjO0fm1_D_Sb4IqH3mQ&oe=663F8AB4"
                            alt="User avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Pool Deza Millones
                    </span>
                </a>
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
