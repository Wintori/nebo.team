import React from 'react';
import { IVehicle, IStarship } from '../utils/api';

interface IListItem {
    data: IVehicle | IStarship;
    image: string;
}

const ListItem = (props: IListItem) => {
    const { name } = props.data;
    const { image } = props;
    return (
        <li className='flex flex-col items-center gap-3 snap-center w-[160px] flex-[0_0_100%]'>
            <img className='w-24 h-24' src={image} alt='Корабль' />
            <p className='text-almost-white text-center'>{name}</p>
        </li>
    );
};

export default ListItem;