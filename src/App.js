import React from 'react';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Global from './theme/global';

function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
