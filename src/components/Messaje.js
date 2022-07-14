import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

const Content = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      height={300}
      width='100%'
      style={{ display: 'flex', position: 'relative', justifyContent: 'center' }}
    >
      <img
        style={{
          margin: 0,
          width: matches ? '70%' : '100%',
          height: '100%',
          objectFit: 'cover',
          fontSize: 0,
          borderRadius: 8,
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
        }}
        alt='hajnal'
        src='https://scontent.fhio3-1.fna.fbcdn.net/v/t1.6435-9/104196243_176934383902033_6873843622387829362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NpyX4qqIE6MAX8ZyBYH&_nc_ht=scontent.fhio3-1.fna&oh=00_AT-O3aPmgpXUHKs7fSzc5MGVzkNF7WifPIHuuMsvZ1rh6Q&oe=62F5854F'
      />
      <Box
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(to top, rgb(40, 44, 53)60%, rgba(0, 0, 0, .0))",
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          paddingTop: 12,
          paddingBottom: 2
        }}>
        <Typography component='p' fontSize={15} textAlign='center'>
        «Cuando estoy haciendo arte, no tengo absolutamente responsabilidad social alguna. Es como soñar.»{<br />}David Cronenberg
        </Typography>
      </Box>
    </Box>
  );
}
export default Content;
