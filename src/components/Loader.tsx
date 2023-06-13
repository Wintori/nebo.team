import React from 'react';
import data from '../images/planet-laoder.json'
import Lottie from 'lottie-react';

const Loader = () => {
    return (
        <Lottie animationData={data} className={'w-[300px] h-full m-auto'} />
    );
};

export default Loader;