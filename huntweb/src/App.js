import React from 'react';
import Routes from './routes';

import Header from './Components/Header';
import Main from './Pages/main';

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes/>
  </div>
)

export default App;
