import React from 'react';
import { Container, Box, Stack, Avatar, Typography } from '@mui/material'

const Abount = () => {
  return (
    <Container>
      <Stack id='1' direction={{ xs: 'column', sm: 'row' }} pt={{ xs: 10, sm: 20 }} pb={{ xs: 10, sm: 20 }} pl={{ xs: 1, sm: 2, md: 15 }} pr={{ xs: 1, sm: 2, md: 15 }} spacing={3} alignItems={{ xs: 'center', sm: 'flex-start' }} justifyContent='center'>
        <Avatar alt='name' src='https://mui.com/static/images/avatar/1.jpg' style={{ width: 140, height: 140, boxShadow: '0px 2px 35px 1px rgba(0,0,0,0.9)', backgroundColor: 'rgba(0,0,0,0.2)' }} />
        <Box width='100%'>
          <Typography variant="h4" component='h1' fontWeight='bold' textAlign={{ xs: 'center', sm: 'left' }}>Pablo Hajnal</Typography>
          <Typography variant="h6" component='p' fontSize={16} color='#e0e0e0'>
            Lorem ipsum dolor sit amet. Et sunt dolorem sed consequatur tempore et quia
            vero ea facere iusto! Hic voluptatem error et dolorem tempora qui dolorum
            laborum 33 minima magni in sint autem et quaerat nihil. Qui enim magni et
            magnam sint cum iusto tempore eos necessitatibus rerum. At delectus quaerat
            eum autem sequi sed eaque voluptatibus et nulla omnis.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
export default Abount;
