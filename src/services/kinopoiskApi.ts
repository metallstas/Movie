import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const kinopoiskKey = import.meta.env.VITE_KINOPOISK_KEY

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
        getFilmsTop: builder.query<any, {type: string, page: number}>({
            query: ({type, page}) => `/v2.2/films/collections?type=${type}&page=${page}`,
        
        })
    })
})

export const {useGetFilmsTopQuery} = kinopoiskApi
