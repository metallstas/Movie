import { Skeleton, Stack } from "@mui/material"

const MovieListSkeleton = () => {
  return (
    <>
    <Stack justifyContent={'left'} ml={12} mb={2}>
    <Skeleton animation='wave' variant="text" width='300px' height='50px'/>

    </Stack>

        <Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'}>
            {Array(15).fill(null).map((_, i) => (
                <Stack key={i} mr={2} ml={2}>
                    <Skeleton 
                        animation='wave'
                        variant="rectangular"
                        height='322px'
                        width='215px'/>
                    <Skeleton animation='wave' variant="text"/>
                    <Skeleton 
                        animation='wave'
                        variant="text"/>
                </Stack>
            ))}
        </Stack>
    </>
  )
}

export default MovieListSkeleton
