// App.js
import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart2 from './Components/Cart2';
import Wishlist from './Components/Wishlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart2/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </Router>
  );
};

export default App;