import { Outlet } from "react-router"
import Navbar from "./ui/Navbar/Navbar"
import Footer from "./ui/Footer/Footer"

import { Box, Container, useMediaQuery } from "@mui/material"

const Layout  = () => {
  const matches = useMediaQuery('(max-width:500px)')

  return (
    <Container fixed sx={{display: 'flex', flexDirection: 'column', minHeight: '97vh'}}>
      <Box sx={{paddingTop: `${matches ? `60px` : `110px`}`}} />  
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout
