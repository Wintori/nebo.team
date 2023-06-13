import React from 'react';

const Error404 = () => {
    return (
        <div className='w-full min-h-[100vh] h-[100%] bg-gradient-to-b from-[#16193c] to-[#01327e] relative flex flex-col justify-center items-center'>
            <h1 className='text-9xl text-almost-white font-black pb-10'>404</h1>
            <p className=' text-3xl text-almost-white font-extrabold pb-10'>Страница не найдена</p>
            <button className='px-10 h-[60px] text-center rounded-full bg-almost-white shadow-black shadow-2xl text-xl font-medium transition-opacity ease-in duration-300 hover:opacity-30' onClick={() => window.location.pathname = '/'}>На главную</button>
        </div>
    );
};

export default Error404;