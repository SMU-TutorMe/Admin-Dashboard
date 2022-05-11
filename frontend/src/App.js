import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddEdit} />
        <Route exact path="/update/:id" component={AddEdit} />
        <Route exact path="/view/:id" component={View} />
        <Route exact path="/about" component={About} />

      </Routes>
      </div>
      
      


    </BrowserRouter>
    
  );
}

export default App;
