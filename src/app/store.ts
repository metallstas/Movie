import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../services/kinopoiskApi";
import { movieReducer } from "../features/qurrentMoviSlice";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
        mainPage: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
