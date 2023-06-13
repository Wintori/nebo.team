import React from 'react';
import { Link } from "react-router-dom";
import { ICharacter } from '../utils/api';
import { get } from '../utils/localstorage';

interface ICharacterItem {
    data: ICharacter;
}

const CharacterItem = (props: ICharacterItem) => {
    const { name, url } = props.data;

    const id = parseInt(url.match(/\d+/) as any);
    let isViewed: boolean = get('visited', id);
    return (
        <li className='border border-black box-border bg-white opacity-70 rounded-lg cursor-pointer hover:bg-cyan-950  hover:scale-125 transition-transform'>
            <Link to={`/character/${id}`} className='flex justify-between group items-center'>
                <p className='text-xl font-medium pl-4 text-almost-black group-hover:text-almost-white transition-colors'>{name}</p>
                {isViewed ? <p className='text-base font-semibold text-almost-white pr-12 pointer-events-none'>Viewed</p> : ''}
            </Link>
        </li>
    );
};

export default CharacterItem;