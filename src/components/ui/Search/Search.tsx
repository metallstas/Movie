import { Autocomplete, Stack, TextField } from "@mui/material"
import { useGetFilmsQuery } from "../../../services/kinopoiskApi"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { useEffect, useState } from "react"
import { setSearchQuery } from "../../../features/searchMovieSlice"

const movieTypes = {
    FILM: 'Фильм',
    TV_SERIES: 'Сериал'
}

const Search = () => {
    const [input, setInput] = useState<string>('')
    const dispatch = useAppDispatch()

    const {
        country,
        genreId,
        order,
        type,
        year,
        page,} = useAppSelector(state => state.searchSlice)


    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            dispatch(setSearchQuery({keyword: input}))
        }, 500)
        return () => {clearTimeout(setTimeoutId)}
    }, [dispatch, input])
    
        
    const {data, isLoading} = useGetFilmsQuery({country,
        genreId,
        order,
        type,
        year,
        page,
        keyword: input})
        
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                sx={{padding: '10px 0'}}
                options={data ? data?.items.map(el => el.nameRu) : []}
                onInputChange={(_, value) => {
                    setInput(value)
                }}
                renderInput={(params) => <TextField {...params} label="Название фильма" />}
            />
        </Stack>
    )
}

export default Search
