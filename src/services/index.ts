import React from 'react';
import { ICharacter } from '../utils/api';

export interface AllCharacters {
    count: number;
    next: string | null;
    previous: string | null;
    results: ICharacter[]
}

interface IPeopleContext {
    people: AllCharacters;
    isNext: boolean;
    isPrev: boolean;
    setPage: any;
    page: number;
    isLoading: boolean;
    setSearch: any;
}

export const PeopleContext = React.createContext<IPeopleContext>({
    people: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    isNext: false,
    isPrev: false,
    setPage: undefined,
    page: 1,
    isLoading: false,
    setSearch: undefined,
});