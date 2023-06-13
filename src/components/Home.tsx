import React, { useContext, useRef } from 'react';
import CharacterItem from './CharacterItem';
import { PeopleContext } from '../services';
import Loader from './Loader';
import Button from './Button';
import { ICharacter } from '../utils/api';
import ArrowSVG from '../images/right-arrow.svg'


const Home = () => {
    const { people, isNext, isPrev, page, setPage, isLoading, setSearch } = useContext(PeopleContext)
    const inputSearchRef = useRef<HTMLInputElement>(null);
    

    function handleSearch(evt: PointerEvent) {
        evt.preventDefault();
        if (inputSearchRef.current) {
            setSearch(inputSearchRef.current.value.toLowerCase())
            setPage(1)
        } else return
    }


    return (
        <div className='w-full min-h-[calc(100vh-80px)] h-full flex flex-col justify-between max-w-[800px] mx-auto pt-7'>
            <form className='flex mx-auto pt-28'>
                <input ref={inputSearchRef}
                    className=" bg-inherit border-2 border-r-0 pl-4 text-lg font-medium text-almost-white focus-visible:outline-none"
                    type="search"
                    placeholder="Искать здесь..."
                />
                <Button isActive={true} styles={`text-base font-normal text-almost-black bg-inherit border-2 border-l-0 p-6`} text={'Поиск'} onClick={(evt: PointerEvent) => { if (!isLoading) { handleSearch(evt) } }} image={ArrowSVG} imageStyles={'w-9 hover:opacity-30 transition-opacity'} />
            </form>
            <ul className='flex flex-col gap-2'>
                {
                    ((people && isLoading) || !people) ? <Loader /> :
                        (people && !isLoading && people.results.length === 0) ? <p className='text-almost-white font-bold text-3xl text-center'>Результатов не найдено</p> :
                            people.results.map((item: ICharacter, index: React.Key) => <CharacterItem data={item} key={index}/>)
                }
            </ul>
            <div className='flex gap-8 justify-center mb-4'>
                {
                    (isPrev && !isLoading) ? <Button isActive={true} styles={'text-base font-bold text-white'} text={'Назад'} onClick={() => { setPage(page - 1); }} /> : <Button isActive={false} styles={'text-base font-bold text-white'} text={'Назад'} onClick={() => { return }} />
                }
                {page ? <p className='text-almost-white font-bold text-base'>Страница {page}</p> : ''}
                {
                    (isNext && !isLoading) ? <Button isActive={true} styles={'text-base font-bold text-white'} text={'Вперед'} onClick={() => { setPage(page + 1); }} /> : <Button isActive={false} styles={'text-base font-bold text-white'} text={'Вперед'} onClick={() => { return }} />
                }
            </div>
        </div>
    );
};

export default Home;