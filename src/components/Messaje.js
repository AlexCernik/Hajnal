import React from 'react';
import { Container, Stack, Box, Typography } from '@mui/material'

const Message = () => {
  return (
    <Container>
      <Stack
        height={400}
        width='100%'
        direction='column'
        alignItems='center'
        justifyContent='center'
        position='relative'
      >
        <Box width={{ xs: '100%', sm:'95%', md: '80%' }} height={400} position='relative' display='flex' alignItems='center' justifyContent='center'>
          <Box
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, .5)"
            }} />

          <Box
            style={{
              position: 'absolute',
              width: '100%',
              top: -15,
              backgroundImage: "linear-gradient(to bottom, rgb(17, 24, 38)50%, rgba(0, 0, 0, .0))",
              paddingTop: 30,
              paddingBottom: 12
            }} />

          <Box
            style={{
              position: 'absolute',
              height: '100%',
              left: -15,
              backgroundImage: "linear-gradient(to right, rgb(17, 24, 38)50%, rgba(0, 0, 0, .0))",
              paddingLeft: 30,
              paddingRight: 12
            }} />

          <Box
            style={{
              position: 'absolute',
              height: '100%',
              right: -15,
              backgroundImage: "linear-gradient(to left, rgb(17, 24, 38)50%, rgba(0, 0, 0, .0))",
              paddingRight: 30,
              paddingLeft: 12
            }} />

          <Box
            style={{
              position: 'absolute',
              width: '100%',
              bottom: -15,
              backgroundImage: "linear-gradient(to top, rgb(17, 24, 38)50%, rgba(0, 0, 0, .0))",
              paddingTop: 30,
              paddingBottom: 12
            }} />

          <img
            style={{
              margin: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              fontSize: 0,
            }}
            alt='hajnal'
            src='https://scontent.fhio3-1.fna.fbcdn.net/v/t1.6435-9/104196243_176934383902033_6873843622387829362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NpyX4qqIE6MAX8ZyBYH&_nc_ht=scontent.fhio3-1.fna&oh=00_AT-O3aPmgpXUHKs7fSzc5MGVzkNF7WifPIHuuMsvZ1rh6Q&oe=62F5854F'
          />
          <Box width={{ xs: '90%', sm:'75%', md: '60%' }} style={{ position: 'absolute' }}>
            <Typography component='p' fontSize={18} textAlign='center' position='relative'>
              «Cuando estoy haciendo arte, no tengo absolutamente responsabilidad social alguna. Es como soñar.»{<br />}<b>David Cronenberg</b>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
export default Message;