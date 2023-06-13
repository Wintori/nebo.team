import React from 'react';
import { IFilm } from '../utils/api';

interface IFilmItem {
    data: IFilm;
}

const FilmItem = (props: IFilmItem) => {
    const { title } = props.data

    return (
        <li className='w-40 h-60 border-4 border-almost-black flex flex-col bg-gray-800'>
            <p className='text-almost-white m-auto self-center text-center'>{title}</p>
        </li>
    );
};

export default FilmItem;