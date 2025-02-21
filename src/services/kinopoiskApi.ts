import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie } from "../components/ui/MovieCard/MovieCard";

const kinopoiskKey = import.meta.env.VITE_KINOPOISK_KEY

interface IFilm {
    countries: number,
    gengreId: number,
    order: string,
    type: string,
    year: number,
    page: number,
}

export interface IData {
    items: IMovie[], 
    total: number, 
    totalPages: number,
}

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
        getFilms: builder.query<IData, IFilm>({
            query: ({
                // countries,
                gengreId,
                order = 'NUM_VOTE',
                type = 'FILM',
                // year,
                page,
            }) => `/v2.2/films?genres=${gengreId}&order=${order}&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
        }),
        getFilmById: builder.query<any, {id: number}>({
            query: ({id}) => `/v2.2/films/${id}`
        })
        // https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=18&order=NUM_VOTE&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1
    })

})

export const {useGetFilmsTopQuery, useGetFilmsQuery, useGetFilmByIdQuery} = kinopoiskApi
