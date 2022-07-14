import './styles.css';
import { Container } from '@mui/material'
import Header from './components/Header';
import Abount from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Content from './components/Messaje';

const App = () => {
  return (
    <>
      <Header />
      <Container className="App" style={{ alignContent: 'center' }}>
        <Abount />
        <Gallery />
        <Content />
        <Contact />
      </Container >
      <Footer />
    </>
  );
}
export default App;