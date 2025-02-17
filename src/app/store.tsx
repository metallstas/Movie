import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../services/kinopoiskApi";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
})

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
