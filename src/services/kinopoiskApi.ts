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
        getFilmsTop: builder.query<IMovie[], {type: string, page: number}>({
            query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        
        }),
        getFilms: builder.query<any, IFilm>({
            query: ({
                countries,
                gengreId,
                order = 'NUM_VOTE',
                type = 'FILM',
                year,
                page,
            }) => `/v2.2/films?countries=${countries}&genres=${gengreId}&order=${order}&type=${type}&year=${year}&page=${page}`,
        })

    })

})

export const {useGetFilmsTopQuery, useGetFilmsQuery} = kinopoiskApi
