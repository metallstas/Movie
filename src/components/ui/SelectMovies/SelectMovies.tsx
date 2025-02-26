import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"

const SelectMovies = () => {
    return (
        <Stack sx={{display: 'flex', width: '100%', flexDirection: {sm: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
            <FormControl fullWidth sx={{margin: '0 5px'}}>
                <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
                <Select label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{margin: '0 5px'}}>
                <InputLabel id="demo-simple-select-label">Страна</InputLabel>
                <Select label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{margin: '0 5px'}}>
                <InputLabel id="demo-simple-select-label">Жанр</InputLabel>
                <Select label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{margin: '0 5px'}}>
                <InputLabel id="demo-simple-select-label">Год</InputLabel>
                <Select label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Box>
                <Button variant="outlined">Сбросить</Button>
            </Box>
        </Stack>
    )
}

export default SelectMovies
