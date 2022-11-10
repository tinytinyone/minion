import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../Components/Main/Main';
import Page from '../Components/Page/Page';

const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Page' element={<Page />} />
    </Routes>
</BrowserRouter>
  )
}

export default Navigation;
