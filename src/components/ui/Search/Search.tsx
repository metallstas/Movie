import { Autocomplete, CircularProgress, Stack, TextField } from "@mui/material"
import { useGetFilmsQuery } from "../../../services/kinopoiskApi"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import React, { useEffect, useState } from "react"
import { setSearchQuery } from "../../../features/searchMovieSlice"
import { useNavigate } from "react-router"

const movieTypes = {
    FILM: 'Фильм',
    TV_SERIES: 'Сериал',
    TV_SHOW: 'ТВ-Шоу',
    MINI_SERIES: 'Мини сериал'
}

const Search = () => {
    const [input, setInput] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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
    
        
    const {data, isFetching} = useGetFilmsQuery({country,
        genreId,
        order,
        type,
        year,
        page,
        keyword: input})
        
    return (
            <Stack spacing={2} sx={{ width: 300, margin: '20px 0'}}>
            <Autocomplete
                sx={{backgroundColor: 'rgba(255, 255, 255, 0.858)', borderRadius: '5px', '& .css-113d811-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {color: 'rgba(0, 0, 0, 0.55)'}}}
                options={data ? data.items : []}
                onInputChange={(_, value) => {
                    setInput(value) 
                }}
                onChange={(_, value) => {
                    navigate(`/movie/${value?.kinopoiskId}`)
                }}
                getOptionLabel={option => `${option.nameRu} - ${movieTypes[option.type as keyof typeof movieTypes]} - ${option.year}`}
                renderInput={(params) => <TextField sx={{fontSize: '20px'}} {...params} label="Поиск" slotProps={{
                    input: {
                      ...params.InputProps,
                      type: isFetching ? '' : 'search',
                      endAdornment: (<React.Fragment>{isFetching ? <CircularProgress size={20} color="inherit"/> : null}</React.Fragment>),
                      
                    },
                  }}
                
                />}
            />
        </Stack>
    )
}

export default Search
