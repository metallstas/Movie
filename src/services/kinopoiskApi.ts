import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../components/ui/MovieCard/MovieCard";
import { IInitialState } from "../features/qurrentMoviSlice";

const kinopoiskKey = import.meta.env.VITE_KINOPOISK_KEY

// interface IFilm {
//     country?: number,
//     genreId: number,
//     order?: string,
//     type: string,
//     year?: number,
//     page?: number,
// }

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
        getFilms: builder.query<IData, IInitialState>({
            query: ({
                country,
                genreId,
                order,
                type,
                year,
                page,
            }) => {
                console.log(
                    {
                        country,
                        genreId,
                        order,
                        type,
                        year,
                        page,
                    }
                )
                return `/v2.2/films?countries=${country ? country : ''}&genres=${genreId ? genreId : ''}&order=${order ? order: 'NUM_VOTE'}&type=${type ? type : 'FILM'}&ratingFrom=0&ratingTo=10&yearFrom=${year ? year : '1000'}&yearTo=${year ? year : '3000'}&page=${page}`},
        }),
        getFilmById: builder.query<any, {id: number}>({
            query: ({id}) => `/v2.2/films/${id}`
        }),
        getGenresAndCountries: builder.query<{genres: IGenres[], countries: ICountries[]}, void>({
            query: () => `/v2.2/films/filters`,
            transformResponse: (response: {genres: IGenres[], countries: ICountries[]}) => ({
                ...response,
                genres: response.genres.filter(({genre}) => !excludeGenres.includes(genre))
            })
        })
    })

})

export const {useGetFilmsTopQuery, useGetFilmsQuery, useGetFilmByIdQuery, useGetGenresAndCountriesQuery} = kinopoiskApi
