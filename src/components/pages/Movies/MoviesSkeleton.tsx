import { useMediaQuery } from "@mui/material"

const MoviesSkeleton = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <div>MoviesSkeleton</div>
  )
}

export default MoviesSkeleton
