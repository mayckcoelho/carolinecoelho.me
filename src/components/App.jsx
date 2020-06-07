import React from 'react';
import Routes from '../Routes'
import { BrowserRouter } from 'react-router-dom';

import Header from "./Header"
import Footer from "./Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
