import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { SiGnuprivacyguard} from 'react-icons/si';
import { RiContactsFill } from 'react-icons/ri';
import { GrInfo } from 'react-icons/gr';



export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <AiFillHome/>,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <GrInfo/>,
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
    icon: <RiContactsFill/>
  },
  {
    id: 4,
    url: '/login',
    text: 'Login',
    icon:<FaSignInAlt/>,
  },
  {
    id: 5,
    url: '/sign-up',
    text: 'Signup',
    icon: <SiGnuprivacyguard/>,
  },
];

export const authLinks = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <AiFillHome/>,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <GrInfo/>,
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
    icon: <RiContactsFill/>
  },
  {
    id: 4,
    url: '/logout',
    text: 'Logout',
    icon:<FaSignOutAlt/>,
  },  
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },  
];
