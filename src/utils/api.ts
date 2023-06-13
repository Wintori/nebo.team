export interface ICharacter {
    birth_year: string;
    eye_color: string;
    films: string[] | IFilm[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string | IPlanet;
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    species: string[] | ISpecie[];
    starships: string[] | IStarship[];
    url: string;
    vehicles: string[] | IVehicle[];
}
export interface IPlanet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | IFilm[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | ICharacter[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}
export interface ISpecie {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eye_colors: string;
    hair_colors: string;
    homeworld: string | IPlanet;
    language: string;
    name: string;
    people: string[] | ICharacter[];
    films: string[] | IFilm[];
    skin_colors: string;
    url: string;
}
export interface IStarship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[] | IFilm[];
    pilots: string[] | ICharacter[];
    starship_class: string;
    url: string;
}
export interface IVehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[] | ICharacter[];
    films: string[] | IFilm[];
    url: string;
    vehicle_class: string;
}
export interface IFilm {
    characters: string[] | ICharacter[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | IPlanet[];
    producer: string;
    release_date: Date;
    species: string[] | ISpecie[];
    starships: string[] | IStarship[];
    title: string;
    url: string;
    vehicles: string[] | IVehicle[];
}


const checkResponse = async (res: Response) => {
    if (res.ok) {
        return await res.json();
    } else if (res.status === 404) {
        window.location.pathname = '/unknown-url'
    }

    return Promise.reject(`Ошибка: ${res.status}`);
}

const getPeople = (page: number = 1) => {
    return fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((res) => checkResponse(res))
}

const getPeopleWithFilter = (page: number = 1, filter: string) => {
    return fetch(`https://swapi.dev/api/people/?search=${filter}&page=${page}`)
        .then((res) => checkResponse(res))
}

const getCharacter = (id: number) => {
    return fetch(`https://swapi.dev/api/people/${id}`)
        .then((res) => checkResponse(res))
}

const getByUrl = (url: string) => {
    return fetch(url)
        .then((res) => checkResponse(res))
}

async function listFetch(list: string[]) {
    let dataList: any = [];
    list?.forEach(url => {
        getByUrl(url)
            .then(res => dataList.push(res))
    });
    return dataList
}

export { getPeople, getCharacter, listFetch, getByUrl, getPeopleWithFilter };