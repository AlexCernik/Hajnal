import React, { useEffect } from 'react';
import { Container, Box, ImageList, Typography, ImageListItem, useMediaQuery, useTheme } from '@mui/material'
import ImageModal from './ImageModal';

const Gallery = () => {
  const theme = useTheme();
  const xsUp = useMediaQuery(theme.breakpoints.only('xs'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  function reveal() {
    var reveals = document.querySelectorAll(".gallery");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 260;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("act");
      } else {
        reveals[i].classList.remove("act");
      }
    }
  }

  useEffect(() => {
    window.removeEventListener('scroll', reveal);
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <Container maxWidth='lg' className='gallery'>
      <Box id='2' mb={10}>
        <Typography textAlign='center' fontWeight='bold' variant="h5" component='h3'>Mis proyectos</Typography>
        <ImageList style={{ width: '100%', height: '100%', paddingBottom: 10 }} gap={8} cols={xsUp ? 1 : lgDown ? 2 : 3}>
          {itemData.map((item, index) => (
            <ImageListItem key={index} className='img-hover' style={{ height: 260, borderRadius: 6, boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)' }}>
              {mdUp && <ImageModal image={item.img} alt={item.title} />}
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
    img: 'https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/277366883_518260319769436_3488517233657932924_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1UbhC0DQhRYAX-x1tkF&_nc_ht=scontent.fres2-1.fna&oh=00_AT8sITtxBtiPAC5nC8B7x5_MZfeuwkx57QSVF3MwGdK54Q&oe=62DA3923',
    title: 'b',
  },
  {
    img: 'https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/277226787_518260393102762_5001473942192144546_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FaeIfVo4K74AX9j0fBt&_nc_ht=scontent.fres2-1.fna&oh=00_AT9PsJk3pJXTy2yFQtKJ5mKvllvT_ywji59e9B8Jz151jA&oe=62DB3170',
    title: 'c',
  },
  {
    img: 'https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/252243667_430969688498500_6524595496138802259_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RMqcHbrsZPwAX-OiX_P&_nc_ht=scontent.fres2-1.fna&oh=00_AT-jCQuZc4M9qWY6MmCquWwkK1qmRFGqExR2B6Q_3f4cMA&oe=62DA0473',
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