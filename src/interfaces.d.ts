import { History, Location } from 'history';

export type Rating = {
    Source: string;
    Value: string;
};

export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMovieDetail {
    Response: string;
    Title?: string;
    Year?: string;
    imdbID?: string;
    Type?: string;
    Poster?: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Ratings?: Rating[];
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
    Error?: string;
}

// @todo переделать?
export interface IApiResponse {
    Response: string;
    Search?: IMovie[];
    totalReults?: string;
    Error?: string;
}

export interface IMovieListPageProps {
    history: History;
    location: Location;
    match: Object;
    movieList: IMovie[];
    movieFetch: () => void;
    movieGet: (payload: string) => void;
    movieListFetch: () => void;
    movieListGet: (payload: string) => void;
}
