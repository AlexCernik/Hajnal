import React from 'react';
import { Stack, Typography, Link } from '@mui/material'
import logo from '../assets/logo.png'

const FLink = ({ href, title }) => (
  <Link
    target='_blank'
    href={href}
    style={{
      alignSelf: 'center',
      fontSize: 12,
      textDecoration: 'none',
      color: '#e0e0e0',
      fontWeight: 'bold'
    }}
  >{title}</Link>
);

const Footer = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }} mt={5} pl={10} pr={10} pt={3} pb={3} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(40, 44, 52, 0.91)', boxShadow: '0px 2px 9px 0px rgba(0,0,0,0.9)' }}>
      <Stack direction='column' alignItems='center'>
        <Typography component='p' fontSize={12}>Created by</Typography>
        <img src={logo} style={{ width: 40, height: 40 }} alt='logo' />
      </Stack>

      <Stack direction='column' spacing={2} mt={1}>
        <FLink href='mailto:devcernik@gmail.com' title='devcernik@gmail.com' />
        <FLink href='https://wa.me/541144076977' title='+54 9 11 4407-6977' />
      </Stack>
    </Stack>
  );
}
export default Footer;