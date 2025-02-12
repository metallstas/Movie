import { Outlet } from "react-router"
import Navbar from "./ui/Navbar/Navbar"
import Footer from "./ui/Footer/Footer"

import { Container } from "@mui/material"

const Layout  = () => {
  return (
    <Container fixed>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout
