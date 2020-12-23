import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DetailsIcon from '@material-ui/icons/Details';
import ContactsIcon from '@material-ui/icons/Contacts';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <HomeIcon/>,
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
    icon: <DetailsIcon/>,
  },
  {
    id: 3,
    url: '/contact',
    text: 'Contact',
    icon: <ContactsIcon/>
  },
  {
    id: 4,
    url: '/sign-up',
    text: 'Signup',
    icon: <LockOpenTwoToneIcon/>,
  },
];

export const authLinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <HomeIcon/>,
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
    icon: <DetailsIcon/>,
  },
  {
    id: 3,
    url: '/contact',
    text: 'Contact',
    icon: <ContactsIcon/>
  },
  {
    id: 4,
    url: '/user',
    text: 'Profile',
    icon:<AccountBoxIcon/>,
  },    
];

