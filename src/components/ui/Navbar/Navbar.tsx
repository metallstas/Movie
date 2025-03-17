import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { 
  Box, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Slide,
  Link,
  useScrollTrigger,
  Divider,
  Stack
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router';
import { MOVIE_LISTS, TOP_LISTS } from '../../constants';
import { ITop } from '../../constants';
import Search from '../Search/Search';
import { ColorModeContext } from '../../../context/ToggleControlMode';
import { Brightness7 } from '@mui/icons-material';

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [width, setWidth] = useState(window.innerWidth)

  const {toggleMode} = useContext(ColorModeContext)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => removeEventListener('resize', handleResize)
  }, [])

  const topCategory = (arr: ITop[]) => (
      arr.map(item => (
        <Link key={item.title} component={RouterLink} to={item.url}>
         <ListItem disablePadding>
             <ListItemButton>
               <ListItemIcon>
                 <item.icon />
               </ListItemIcon>
               <ListItemText primary={item.title}/>
             </ListItemButton>
           </ListItem>
        </Link>
       ))
    )
  
  const trigger = useScrollTrigger({
    target: window,
  })
  const handleDrawerToggle = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth='lg'>
          <Toolbar>
            
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{width: 250}} onClick={handleDrawerToggle}>
                <List>
                  {topCategory(TOP_LISTS)}
                </List>
                <Divider />
                <List>
                  {topCategory(MOVIE_LISTS)}
                </List>
              </Box>
            </Drawer>
            <Stack 
              flexDirection='row' 
              justifyContent={'space-between'} 
              alignItems={'center'}
              width={'100%'}>
               <Stack flexDirection={'row'}>
                <IconButton
                color="inherit"
                onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
                <Typography 
                  variant='h4'
                  sx={{color: '#fff', textDecoration: 'none'}} 
                  component={RouterLink} to={'/'}>
                  Betflix
                </Typography>
               </Stack>
                {width < 500 ? null : <Search />}

                <IconButton onClick={toggleMode}>
              <Brightness7 />
            </IconButton>
            </Stack>
            
          </Toolbar>
        </Container>
      </AppBar>
      </Slide>
      {width < 500 ?  <Search /> : null}
      </>
  );
}

export default Navbar
