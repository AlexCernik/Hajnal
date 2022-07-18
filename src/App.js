import React from 'react';
import Header from './components/Header';
import Abount from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Message from './components/Messaje';
import WhatsApp from './components/WhatsApp';

const App = () => {
  return (
    <>
      <Header />
      <Abount />
      <Gallery />
      <Message />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}
export default App;