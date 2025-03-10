import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import { useGetGenresAndCountriesQuery } from "../../../services/kinopoiskApi"
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectQuery, resetQuery } from "../../../features/qurrentMovieSlice";

const SelectMovies = ({initialState}: any) => {
    const {order, country, year, genreId} = useAppSelector(state => state.mainPage)
    const dispatch = useAppDispatch()
    const {data, error, isLoading} = useGetGenresAndCountriesQuery()
    const page = 1

    const orderList = [{
        title: 'По рейтингу',
        value: 'RATING'
    }, 
    {
        title: 'По оценкам',
        value: 'NUM_VOTE'
    }]

    const yearsArr = new Array(60).fill(null).map((_, i) => new Date().getFullYear() - i)

    const handleSort = (e: SelectChangeEvent<unknown>) => {
        dispatch(selectQuery({order: e.target.value, page}))
    }

    const handleCountry = (e: SelectChangeEvent<unknown>) => {
        dispatch(selectQuery({country: e.target.value, page}))
    }

    const handleGenres = (e: SelectChangeEvent<unknown>) => {
        dispatch(selectQuery({genreId: e.target.value, page}))
    }

    const handleYear = (e: SelectChangeEvent<unknown>) => {
        dispatch(selectQuery({year: e.target.value, page}))
    }

    return (
        <Stack sx={{display: 'flex', width: '100%', flexDirection: {sm: 'column', md: 'row', gap: 5}, justifyContent: 'center', alignItems: 'center'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
                <Select 
                    label="Сортировка" 
                    value={order}
                    labelId="demo-simple-select-label"
                    onChange={handleSort}>
                    {orderList.map(order => <MenuItem key={order.value} value={order.value}>{order.title}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Страна</InputLabel>
                <Select 
                    label="Страна" 
                    labelId="demo-simple-select-label"
                    value={country ? country : ''}
                    onChange={handleCountry}>
                    {data?.countries.map(country => <MenuItem key={country.id} value={country.id}>{country.country}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Жанр</InputLabel>
                <Select 
                    label="Жанр" 
                    labelId="demo-simple-select-label"
                    value={genreId ? genreId : ''}
                    onChange={handleGenres}>
                {data?.genres.map(genre => <MenuItem key={genre.id} value={genre.id}>{genre.genre}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Год</InputLabel>
                <Select 
                    label="Год"
                    value={year ? year : ''}
                    defaultValue={0}
                    onChange={handleYear}>
                    {yearsArr.map(year => <MenuItem key={year} value={year}>{year}</MenuItem>)}
                </Select>
            </FormControl>
            <Box>
                <Button 
                    sx={{pt: '15px', pb: '14px'}}
                    variant="outlined" 
                    startIcon={<CloseIcon />}
                    onClick={() => dispatch(resetQuery(initialState))}>
                    Сбросить
                    </Button>
            </Box>
        </Stack>
    )
}

export default SelectMovies
