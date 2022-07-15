import React, { useState } from 'react';
import '../styles.css';
import { AppBar, Toolbar, Container, Stack } from '@mui/material'
import { Link } from 'react-scroll';

const pages = ['Sobre mi', 'Proyectos', 'Contacto'];

const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () =>{
    if(window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);

  return (
    <AppBar position="fixed" className={color ? 'header header-bg' : 'header'}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ minHeight: 56 }}>

          <Stack direction="row" md={{ spacing: 2 }} spacing={3} justifyContent="center" style={{ width: '100%' }}>
            {pages.map((item, index) => (
              <Link key={index}
                style={{
                  textDecoration: 'none',
                  color: '#FAFAFA',
                  cursor: 'pointer',
                }}
                to={`${index + 1}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >

                {item}
              </Link>
            ))}
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
