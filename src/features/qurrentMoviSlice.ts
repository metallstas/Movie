import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
    country: string,
    genreId: number,
    order: string,
    type: string,
    year: number,
    page: number,
}

const initialState: IInitialState = {
    country: '',
    genreId: 0,
    order: '',
    type: '',
    year: 0,
    page: 1,
}

export const currentMovieSlice = createSlice({
    name: 'currentMovieSlice',
    initialState,
    reducers: {
        selectQuery: (state, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload
        }),
        resetQuery: () => ({
            ...initialState,
        })
    }
})

export const {selectQuery, resetQuery} = currentMovieSlice.actions
export const movieReducer = currentMovieSlice.reducer
