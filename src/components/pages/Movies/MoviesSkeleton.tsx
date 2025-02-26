import { Box, Skeleton, Stack, useMediaQuery } from "@mui/material"
import React from "react"

const MoviesSkeleton = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Box mt={2} mb={2}>
        {new Array(6).fill(null).map((_, i) => (
            <React.Fragment key={i}>
                <Box mt={2} mb={2} display={'flex'} >
                <Skeleton 
                    animation='wave'
                    variant="rectangular"
                    height="38px"
                    width="200px"
                    />
                </Box>

                <Stack direction="row" justifyContent='start'>
                    {new Array(isMobile ? 1 : 6).fill(null).map((_, i) => (
                        <Box mr={1} key={i}>
                            <Skeleton 
                                animation='wave'
                                variant="rectangular"
                                height={isMobile ? '350px' : '265px'}
                                width={isMobile ? '250px' : '192px'}/>
                        </Box>

                    ))}
                </Stack>
            </React.Fragment>
        ))}
    </Box>
  )
}

export default MoviesSkeleton
