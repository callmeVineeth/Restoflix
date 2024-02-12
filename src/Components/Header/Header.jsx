import React, { useState } from 'react';
import { AppBar, Box, Typography, styled} from '@mui/material';
import CustomButton from './CustomButton';
import titleLogo from './assets/logo.png';


//Icon Imports  for Mob_navbar . . . . . . . 
import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material//FeaturedPlayList'
import MiscellaneousServiceIcon from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts';
import{Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';


const NavbarStyles = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '2.5rem',
  zIndex:'999',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
}));

const NavLinks = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '16px',
  transform: 'all',
  cursor:'pointer',
  ':hover': {
    transition: '2s easeInOut',
    transitionDuration: '2s',
    opacity:'50%',
  },
  [theme.breakpoints.down('md')]:{
     display:'none'
  }
}));

const NavLogo = styled('img')(({theme})=>({
     cursor:'pointer',
     height:'190px',
[theme.breakpoints.down('md')]:{
     display:'none'
},
}));

const MobToogleBar = styled(MenuIcon)(({theme})=>({
     cursor:'pointer',
     zIndex:'999',
     color:'black',
     display:'none',
     marginRight: theme.spacing(2),
     [theme.breakpoints.down('md')]:{
          display:'block'
     }
}))

const icons = [
  <HomeIcon />,
  <FeaturedPlayListIcon />,
  <MiscellaneousServiceIcon />,
  <ContactsIcon />
];

function Header() {

  const[ drawerState, setDrawerState]= useState({left:false});

  const toggleDrawer=(anchor, open)=>(event)=>{
    if
    (event.type === 'keydown' && 
     (event.key === 'Shift' || event.key ==='Tab')
     ) {
      return;
    }
    setDrawerState({...drawerState, [anchor]:open});
}

const list = (anchor)=> (
  <Box sx={{width: anchor=== 'top' || anchor === 'bottom' ? 'auto': 250 }}
   role='presentation'
   onClick={toggleDrawer(anchor, true)}
   onKeyDown={toggleDrawer(anchor, true)}
   >
    <List>
{
  nav_Styles.map((item, index) =>(

          <ListItem key={item.id} disablePadding>
            <ListItemButton>    
            <ListItemIcon> 
       {index >= 0 && index < icons.length && icons[index]}
       </ListItemIcon>
      <ListItemText primary={item.text} />
       </ListItemButton>
       </ListItem>
  ))
      }
      </List>

  </Box>
)

  const nav_Styles = [
    { id: 1, path: '/home',  text: 'Home' },
    { id: 2, path: '/about', text: 'About' },
    { id: 3, path: '/home',  text: 'Dishes' },
    { id: 4, path: '/home',  text: 'Services' },
  ];

  return (
    <>
         <AppBar sx={{ backgroundColor: 'rgb(227 172 17)', display: 'flex', flexDirection: 'row',
          justifyContent: 'space-between', alignItems:'center', padding:'10px', height:'110px' , }}>
         
           <NavbarStyles>
               
           <MobToogleBar onClick={toggleDrawer("left", true)}/>   

          <Drawer
          anchor='left'
          open= {drawerState['left']}
          onClose={toggleDrawer('left', false)}>
           
           {list('left')}
          </Drawer>
       
          <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', gap:'40px'}}>
             <NavLogo src={titleLogo}/> 
               {nav_Styles.map((items,key) => (
                 <NavLinks key={items.id}>
                   {items.text}
                 </NavLinks>
               ))}
         </Box>

           </NavbarStyles>
           <Box>
             <CustomButton backgroundColor='white' color='#0F184C' BtnText='SignUp'  borderColor='#0F184C' />
             <CustomButton backgroundColor='#0F184C' color='white' BtnText='Register'borderColor='#0F184C' />
     
           </Box>
         </AppBar>
  
    </>
  );
}

export default Header;
