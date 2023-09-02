// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './Components/Table/Table';
import UserDashboard from './Components/Dashboard/UserDashboard';

function App() {
  return (
    
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Table />} />
            <Route  path="/dashboard" element={<UserDashboard/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
