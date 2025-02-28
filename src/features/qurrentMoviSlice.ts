import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
    country: number,
    genreId: number,
    order: string,
    type: string,
    year: number,
    page: number,
}

const initialState: IInitialState = {
    country: 0,
    genreId: 0,
    order: 'NUM_VOTE',
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
        resetQuery: (_, action: PayloadAction<any>) => {
            if (action.payload) {
                return {...initialState, ...action.payload}
            } else {
                return {...initialState}
            }
        }
    }
})

export const {selectQuery, resetQuery} = currentMovieSlice.actions
export const movieReducer = currentMovieSlice.reducer
