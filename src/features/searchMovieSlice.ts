import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./qurrentMovieSlice";

export interface ISearchMovie extends IInitialState {
    keyword: string,
}

const initialState: ISearchMovie = {
    country: 0,
    genreId: 0,
    order: 'NUM_VOTE',
    type: '',
    year: 0,
    page: 1,
    keyword: '',
}

export const searchMovieSlice = createSlice({
    name: 'currentMovieSlice',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<any>) => {
            return {...state,
            ...action.payload}
        },

        
    }
})

export const {setSearchQuery} = searchMovieSlice.actions
export const searchReducer = searchMovieSlice.reducer
