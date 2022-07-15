import React from 'react';
import { Stack, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Stack alignSelf='center' mt={5} pl={10} pr={10} pt={5} pb={5} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(40, 44, 52, 0.91)', boxShadow: '0px 2px 9px 0px rgba(0,0,0,0.9)' }}>
      <Typography component='p' mb={0.5} fontSize={12}>Created by devCernik</Typography>
      <Link href='mailto:devcernik@gmail.com' style={{ alignSelf: 'center', fontSize: 12, textDecoration: 'none', color: '#61dafb', fontWeight: 'bold' }}>devcernik@gmail.com</Link>
    </Stack>
  );
}
export default Footer;