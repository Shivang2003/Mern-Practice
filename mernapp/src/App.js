
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
<Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Navbar/>}/>
      </Routes>
    </div>
  </Router>
    </div>
  );
}

export default App;
