import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../components/ui/MovieCard/MovieCard";
import { ISearchMovie } from "../features/searchMovieSlice";

const kinopoiskKey = import.meta.env.VITE_KINOPOISK_KEY

interface IStaff {
    staffId: number,
    nameRu: string,
    nameEn: string,
    description: null | string,
    posterUrl: string,
    professionText: string,
    professionKey : string,
}

export interface IActorFilms {
    description: string,
    filmId: number,
    general: boolean,
    nameEn: string,
    nameRu: string,
    professionKey: string,
    rating: string
}

export interface IActor {
    age: number,
    birthday: string,
    birthplace: string,
    death: null | string,
    deathplace: null | string,
    facts: string[],
    films: IActorFilms[],
    growth: number,
    hasAwards: number,
    nameEn: string,
    nameRu: string,
    personId: number,
    posterUrl: string,
    profession: string,
    sex: string,
    spouses: any[],
    webUrl: string,
}

export interface ISequelsAndPrequels{
    filmId: number,
    nameRu: string,
    nameEn: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string
    relationType: string
}

export interface IGenres {
    id: number,
    genre: string,
}

export interface ICountries {
    id: number,
    country: string,
}

export interface IData {
    items: IMovie[], 
    total: number, 
    totalPages: number,
}

const excludeGenres = [
    '', 'новости', 'для взрослых', 'церемония', 'реальное ТВ', 'ток-шоу'
]

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api',
        prepareHeaders: headers => {
            headers.set('X-API-KEY', kinopoiskKey)
            headers.set('Content-Type', 'application/json')
        }
    }),
    endpoints: (builder) => ({
        getFilmsTop: builder.query<IData, {type: string, page: number}>({
            query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        
        }),
        getFilms: builder.query<IData, ISearchMovie>({
            query: ({
                country,
                genreId,
                order,
                type,
                year,
                page,
                keyword,
            }) => {
                return `/v2.2/films?countries=${country ? country : ''}&genres=${genreId ? genreId : ''}&order=${order ? order: 'NUM_VOTE'}&type=${type ? type : 'FILM'}&ratingFrom=0&ratingTo=10&yearFrom=${year ? year : '1000'}&yearTo=${year ? year : '3000'}&page=${page}&keyword=${keyword ? keyword : ''}`},
        }),
        getGenresAndCountries: builder.query<{genres: IGenres[], countries: ICountries[]}, void>({
            query: () => `/v2.2/films/filters`,
            transformResponse: (response: {genres: IGenres[], countries: ICountries[]}) => ({
                ...response,
                genres: response.genres.filter(({genre}) => !excludeGenres.includes(genre))
            })
        }),
        getFilmById: builder.query<any, {id: number}>({
            query: ({id}) => `/v2.2/films/${id}`
        }),
        getSequelsAndPrequels: builder.query<ISequelsAndPrequels [], {id: number}>({
            query: ({id}) => `/v2.1/films/${id}/sequels_and_prequels`
        }),
        getStuffByFilm: builder.query<IStaff [], {id: number}>({
            query: ({id}) => `/v1/staff?filmId=${id}`
        }),
        getActorById: builder.query<IActor, {id: number}>({
            query: ({id}) => `/v1/staff/${id}`
        })
    })

})

export const {
    useGetFilmsTopQuery, 
    useGetFilmsQuery, 
    useGetFilmByIdQuery, 
    useGetGenresAndCountriesQuery,
    useGetSequelsAndPrequelsQuery,
    useGetStuffByFilmQuery,
    useGetActorByIdQuery
} = kinopoiskApi
