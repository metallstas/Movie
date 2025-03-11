import { Outlet } from "react-router"
import Navbar from "./ui/Navbar/Navbar"
import Footer from "./ui/Footer/Footer"

import { Box, Container } from "@mui/material"

const Layout  = () => {
  return (
    <Container fixed sx={{display: 'flex', flexDirection: 'column', minHeight: '97vh'}}>
      <Box sx={{paddingTop: '110px'}} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout
