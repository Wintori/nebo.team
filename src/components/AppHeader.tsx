import React from 'react';
import { Link } from "react-router-dom";


const AppHeader = () => {
    return (
        <div className='shadow-black shadow-md'>
            <nav className="h-[80px] flex justify-center items-center w-full bg-gradient-to-b from-[#0b0d1e] to-[#16193c] relative overflow-hidden">
                <Link to='/' className='absolute left-[4%] text-3xl font-semibold text-almost-white'>SWApi</Link>
                <Link to='/' className='text-xl font-semibold text-almost-white hover:opacity-40 hover:scale-125 duration-500 hover:tracking-wider'>Главная</Link>
            </nav>
        </div>
    );
};

export default AppHeader;