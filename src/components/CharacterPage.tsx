import React, { useEffect, useState } from 'react';
import { getCharacter, listFetch, getByUrl } from '../utils/api';
import ProfileAvatar from '../images/character-avatar.svg';
import ListItem from './ListItem';
import StarshipSVG from '../images/spaceship.svg';
import FilmItem from './FilmItem';
import { ICharacter, IStarship, IFilm, IVehicle, IPlanet, ISpecie } from '../utils/api';
import { getAll, set, get } from '../utils/localstorage'

const CharacterPage = () => {
    const [data, setData] = useState<ICharacter>()
    const id = parseInt(window.location.pathname.match((/\d+/)) as any);

    if (getAll('visited')) {
        if (get('visited', id)) {

        } else if (id) {
            set('visited', id, 1)
        }
    }


    const [ships, setShips] = useState<IStarship[]>()
    const [vehicles, setVehicles] = useState<IVehicle[]>()
    const [films, setFilms] = useState<IFilm[]>()
    const [specie, setSpecie] = useState<ISpecie[]>()
    const [planet, setPlanet] = useState<IPlanet>()

    useEffect(() => {
        getCharacter(id)
            .then((res) => {
                setData(res)
                getByUrl(res.homeworld)
                    .then(res => setPlanet(res))
                listFetch(res.starships)
                    .then(res => setShips(res))
                    .catch(err => console.log(err))
                listFetch(res.vehicles)
                    .then(res => setVehicles(res))
                    .catch(err => console.log(err))
                listFetch(res.films)
                    .then((res) => setFilms(res))
                    .catch(err => console.log(err))
                listFetch(res.species)
                    .then((res) => setSpecie(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className='mx-40 pt-10 pb-24'>
            <div className='flex justify-around'>
                <div className='flex items-center  px-9'>
                    <div className='bg-almost-white rounded-full p-3 w-fit'>
                        <img className='w-10' src={ProfileAvatar} alt='Avatar' />
                    </div>
                    <h2 className=' text-7xl font-medium text-almost-white ml-8'>{data?.name}</h2>
                </div>
                <ul className='border border-almost-white p-8'>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Дата рождения&nbsp;:</p>
                        <p className='text-almost-white'>{data?.birth_year}</p>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Пол&nbsp;:</p>
                        <p className='text-almost-white'>{data?.gender}</p>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Рост&nbsp;:</p>
                        <p className='text-almost-white'>{data?.height}</p>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Вес&nbsp;:</p>
                        <p className='text-almost-white'>{data?.mass}</p>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Цвет кожи&nbsp;:</p>
                        <p className='text-almost-white'>{data?.skin_color}</p>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Цвет волос&nbsp;:</p>
                        <p className='text-almost-white'>{data?.hair_color}</p>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Разновидность&nbsp;:</p>
                        <div className='flex gap-2'>
                            {(specie && specie.length === 0) ? <p className='text-almost-white'>n/a</p> : specie ? specie.map((item: ISpecie, index: React.Key) => <p className='text-almost-white'>{item.name}</p>) : ' '}
                        </div>
                    </li>
                    <li className='flex gap-7 items-center'>
                        <p className='text-almost-white'>Родная планета :</p>
                        <p className='text-almost-white'>{planet?.name}</p>
                    </li>
                </ul>
            </div>
            <div className='flex justify-around'>
                <div className='overflow-hidden w-[30%] pt-24'>
                    <h3 className='text-2xl text-almost-white text-center'>Звездолеты во владении</h3>
                    <ul className='flex overflow-x-scroll snap-x pt-10 px-10 pb-3 horizontal-scroller'>
                        {(ships && ships.length === 0) ? <p className='text-almost-white font-semibold text-center w-full pb-6'>Звездолеты не найдены</p> : ships ? ships.map((item: IStarship, index: React.Key) => <ListItem data={item} image={StarshipSVG} key={index} />) : <p className='text-almost-white font-semibold text-center w-full pb-6'>Загрузка...</p>}
                    </ul>
                </div>
                <div className='overflow-hidden w-[30%] pt-24'>
                    <h3 className='text-2xl text-almost-white text-center'>Транспорт во владении</h3>
                    <ul className='flex  overflow-x-scroll snap-x pt-10 px-10 pb-3 horizontal-scroller'>
                        {(vehicles && vehicles.length === 0) ? <p className='text-almost-white font-semibold text-center w-full pb-6'>Транспорт не найден</p> : vehicles ? vehicles.map((item: IVehicle, index: React.Key) => <ListItem data={item} image={StarshipSVG} key={index} />) : <p className='text-almost-white font-semibold text-center w-full pb-6'>Загрузка...</p>}
                    </ul>
                </div>
            </div>
            <div className='pt-20'>
                <h3 className='text-2xl text-almost-white text-center'>Список фильмов</h3>
                <ul className='mx-auto grid grid-cols-fill160 gap-12 justify-center pt-14 place-content-center'>
                    {(films && films.length === 0) ? <p className='text-almost-white font-semibold text-center w-full pb-6'>Фильмы не найдены</p> : films ? films.map((item: IFilm, index: React.Key) => <FilmItem data={item} key={index} />) : <p className='text-almost-white font-semibold text-center w-full pb-6'>Загрузка...</p>}
                </ul>
            </div>
        </div>
    );
};

export default CharacterPage;