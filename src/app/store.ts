import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../services/kinopoiskApi";
import { movieReducer } from "../features/qurrentMovieSlice";
import { searchReducer } from "../features/searchMovieSlice";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
        mainPage: movieReducer,
        searchSlice: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
