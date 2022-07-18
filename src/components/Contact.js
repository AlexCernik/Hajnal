import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material'
import { WhatsappOutlined, FacebookOutlined, MailOutline } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box id='3' pt={10}>
      <Typography textAlign='center' fontWeight='bold' variant="h5" component='h3' mb={4}>Contáctame</Typography>
      <Container maxWidth="xs" style={{ alignItems: 'center', marginTop: 32, paddingLeft: 30, paddingRight: 30 }}>
        <Stack direction='row' spacing={2} alignItems='center' justifyContent='space-evenly'>
          <Link href='https://wa.me/541144076977' target='_blank' textAlign='center' fontSize={10} style={{ textDecoration: 'none', color: '#e0e0e0' }}>
            <WhatsappOutlined color='success' />{<br />}
            WhatsApp
          </Link>
          <Link href='https://fb.com' target='_blank' textAlign='center' fontSize={10} style={{ textDecoration: 'none', color: '#e0e0e0' }}>
            <FacebookOutlined color='info' />{<br />}
            Facebook
          </Link>
          <Link href='mailto:devcernik@gmail.com' target='_blank' textAlign='center' fontSize={10} style={{ textDecoration: 'none', color: '#e0e0e0' }}>
            <MailOutline color='warning' />{<br />}
            Correo
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
export default Contact;
