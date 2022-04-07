import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './screen/login/login';
import Message from './screen/message/message';
import Register from './screen/register';
import './styles/main.sass'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/message' element={<Message/>} />
    </Routes>
  );
}

export default App;
