import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./navbar";
import { BrowserRouter as Router,  Route,Routes,Switch } from 'react-router-dom';
function App() {
return (
<div className="app">
  <Router>
  <Navbar/>
  
      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>

    </Router>
    </div>
);
}
export default App;