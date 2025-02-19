import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    countries: number,
    gengreId: number,
    order: string,
    type: string,
    year: number,
    page: number,
}

const initialState: IInitialState = {
    countries: 0,
    gengreId: 0,
    order: '',
    type: '',
    year: 0,
    page: 1,
}

export const currentMovieSlice = createSlice({
    name: 'currentMovieSlice',
    initialState,
    reducers: {}
})

export const movieReducer = currentMovieSlice.reducer
