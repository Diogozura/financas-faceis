import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {  Navigation } from '../../Links';

import  { useRouter } from 'next/router';
import { Button } from '@mui/material';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const drawerWidth = 240;

const navItems = [{
  id: 1,
  label: 'Tabelas',
  path: '/',
  // icon: HomeIcon
},
{
  id: 2,
  label: 'Sobre',
  path: '/sobre',
  // icon: HomeIcon
},
{
  id: 4,
  label: 'Contato',
  path: '/contato',
  // icon: HomeIcon
  }
];
function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Topo(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ bgcolor:'#201E50' , mb:'5em' }}>
      <Typography variant="h6" color={'white'} sx={{ m: 2 }}>
       Tabelas Facies

      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Navigation key={item.id} href={item.path}>
                {item.label}
              </Navigation>

            </ListItemButton>
          </ListItem>

        ))}
       
        

      </List>
    </Box>
  );



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <HideOnScroll {...props}>
        <AppBar component="nav" sx={{bgcolor:'#201E50' , mb:'5em'}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <Navigation href='/'>Tabelas Facies</Navigation>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                   
                    <Navigation  key={item.id} href={item.path} style={{color:'white', margin:2}} >
                {item.label}
              </Navigation>
              
              
            ))}
          </Box>
        </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Box component="nav">

          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
            
          </Drawer>
        </Box>
      </Box>
     
    </>


  );
}

