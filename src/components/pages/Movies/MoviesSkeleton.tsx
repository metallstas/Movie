import { Box, Skeleton, Stack, useMediaQuery } from "@mui/material"
import React from "react"

const MoviesSkeleton = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <Box mt={2} mb={2}>
        {new Array(5).fill(null).map((_, i) => (
            <React.Fragment key={i}>
                <Box mt={2} mb={2} >
                <Skeleton 
                    animation='wave'
                    variant="rectangular"
                    height="38px"
                    width="200px"
                    />
                </Box>

                <Stack direction="row" justifyContent='center' flexWrap={'wrap'}>
                    {new Array(isMobile ? 1 : 6).fill(null).map((_, i) => (
                        <Box width={'100%'} mr={1} ml={1} key={i}>
                            <Skeleton 
                         
                        animation='wave'
                        variant="rectangular"
                        height={isMobile ? '520px' : '340px'}
                        width={isMobile ? '100%' : '178px'}/>
                        </Box>

                    ))}
                </Stack>
            </React.Fragment>
        ))}
    </Box>
  )
}

export default MoviesSkeleton
