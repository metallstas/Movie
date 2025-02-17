import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    countries: string,
    gengreId: string,
    order: string,
    type: string,
    year: string,
    page: number,
}

const initialState: any = {
    countries: '',
    gengreId: '',
    order: 'NUM_VOTE',
    type: '',
    year: '',
    page: 1,
}

export const currentMovieSlice = createSlice({
    name: 'currentMovieSlice',
    initialState,
    reducers: {}
})

export const movieReducer = currentMovieSlice.reducer
