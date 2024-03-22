import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route path='/AddContact' element={<AddContact />} />
                <Route path='/' element={<Home />} />
                <Route path='/editcontact/:id' element={<EditContact />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default injectContext(App);