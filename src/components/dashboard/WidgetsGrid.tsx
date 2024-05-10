'use client';

import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

    return (
        <div>
            <SimpleWidget
                title={`${isCart}`}
                subtitle="Productos agregados"
                label="Contador"
                icon={<IoCartOutline size={70} className="text-blue-600" />}
                href="/dashboard/counter"
            />
            {/* <SimpleWidget /> */}
        </div>
    )
}
