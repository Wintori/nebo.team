import React, { useContext } from 'react';
import { PeopleContext } from '../services';

interface IButton {
    text?: string;
    styles?: string;
    isActive?: boolean;
    onClick?: (() => void) | ((evt: any) => void);
    image?: string;
    imageStyles?: string;
}

const Button = (props: IButton) => {
    const { isLoading } = useContext(PeopleContext)
    const { text, styles, isActive, onClick, image, imageStyles } = props

    return (
        <button  className={`m-0 p-0 bg-inherit ${styles} ${isActive ? '' : 'cursor-auto opacity-30'} ${isLoading ? 'cursor-auto' : 'cursor-pointer'}`} onClick={onClick}>
            {image ? <img className={`${imageStyles} ${isLoading ? 'cursor-auto opacity-30' : ''}`} src={image} alt={text} /> : text}
        </button>
    );
};

export default Button;