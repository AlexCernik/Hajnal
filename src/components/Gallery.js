import React from 'react';
import { Container, Box, ImageList, Typography, ImageListItem, useMediaQuery, useTheme } from '@mui/material'

const Gallery = () => {
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.only('xs'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Container maxWidth='lg'>
      <Box id='2' mb={10}>
        <Typography textAlign='center' fontWeight='bold' variant="h5" component='h3'>Mis proyectos</Typography>
        <ImageList style={{ width: '100%', height: '100%', paddingBottom: 10 }} gap={8} cols={xsUp ? 1 : lgDown ? 2 : 3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} style={{ height: 260, borderRadius: 6, boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)' }}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ objectFit: 'cover', borderRadius: 6, width: '100%', height: '100%', fontSize: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}
export default Gallery;






const itemData = [
  {
    img: 'https://scontent.fhio3-1.fna.fbcdn.net/v/t1.6435-9/104196243_176934383902033_6873843622387829362_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NpyX4qqIE6MAX8ZyBYH&_nc_ht=scontent.fhio3-1.fna&oh=00_AT-O3aPmgpXUHKs7fSzc5MGVzkNF7WifPIHuuMsvZ1rh6Q&oe=62F5854F',
    title: 'a',
  },
  {
    img: 'https://scontent.fhio3-1.fna.fbcdn.net/v/t39.30808-6/277226787_518260393102762_5001473942192144546_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SI5g3QItEZoAX_6p6Tj&_nc_ht=scontent.fhio3-1.fna&oh=00_AT-Meb7CkqHBfjydk-8SukP9vZDe0mT39R17-ulJEppxHA&oe=62D542B0',
    title: 'b',
  },
  {
    img: 'https://scontent.fhio3-1.fna.fbcdn.net/v/t39.30808-6/276321150_518260363102765_3826034570313910078_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QXDwrJHtkloAX8BBnHL&_nc_ht=scontent.fhio3-1.fna&oh=00_AT_t-MvLIZl4QAOCfTFGoDIGSEhxa4ql0yX1TuWTlmtf2w&oe=62D4373D',
    title: 'c',
  },
  {
    img: 'https://scontent.fhio3-1.fna.fbcdn.net/v/t39.30808-6/275681334_511213107140824_2097415633345262588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yTW4CzVCvpgAX-QfbBe&_nc_ht=scontent.fhio3-1.fna&oh=00_AT-g07pADL_Zg-cNNZDOlLDjNxjTD7uhTitPQwJRHghMXA&oe=62D4AE11',
    title: 'd',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'e',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'f',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'g',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'h',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'i',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'j',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'k',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'l',
  // },
];