import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Layout } from '../Layout/Layout';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Projects } from '../../pages/Projects';
import { Contacts } from '../../pages/Contacts';
import { NotFound } from '../../pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='projects' element={ <Projects />} />
          <Route path='contacts' element={ <Contacts /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
