import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './Components/Table/Table';
import UserDashboard from './Components/Dashboard/UserDashboard';
import Navbar from './Components/NavBar/Navbar'; // Import the Navbar component
 import Login from './Components/Login/Login'; 
 import Task from './Components/Task/Task';
function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard/:partyCode" element={<UserDashboard />} />
        <Route path='/task' element={<Task/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
