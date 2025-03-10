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
import { useState } from 'react';
import { Link as RouterLink } from 'react-router';
import { MOVIE_LISTS, TOP_LISTS } from '../../constants';
import { ITop } from '../../constants';
import Search from '../Search/Search';

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

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
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth='lg'>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
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
              <Typography 
                variant='h4'
                sx={{color: '#fff', textDecoration: 'none'}} 
                component={RouterLink} to={'/'}>
                Betflix
              </Typography>
              <Search />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      </Slide>
  );
}

export default Navbar
