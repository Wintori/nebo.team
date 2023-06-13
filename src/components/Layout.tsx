import React from 'react';
import { Outlet } from "react-router-dom";
import SWImage from '../images/Star_wars.png'
import AppHeader from './AppHeader';

const Layout = () => {
    return (
        <>
            <header>
                <AppHeader />
            </header>
            <main className='w-full min-h-[calc(100vh-80px)] h-[100%] bg-gradient-to-b from-[#16193c] to-[#01327e] relative'>
                <img className='absolute right-[-100px] top-[calc(50%-200px)] rotate-90 w-[400px] opacity-30 pointer-events-none' src={SWImage} alt='StarWars' />
                <Outlet />
            </main>
        </>
    );
};

export default Layout;