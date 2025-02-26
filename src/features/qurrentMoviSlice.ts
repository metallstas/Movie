import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    gengreId: 1,
    order: '',
    type: '',
    year: 0,
    page: 1,
}

export const currentMovieSlice = createSlice({
    name: 'currentMovieSlice',
    initialState,
    reducers: {
        selectQuery: (state, action: PayloadAction<IInitialState>) => ({
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
