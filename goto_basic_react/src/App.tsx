import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./includes/Header/Header";
import Footer from "./includes/Footer/Footer";
import Test from "./includes/Test/Test";
import MainArea from "./includes/Main/MainArea";
import BasicList from "./includes/Main/BasicList";
import BasicImageList from "./includes/Main/BasicImageList";
import Login from "./includes/Main/Login";
import SignIn from "./includes/Main/SignIn";
import MainRouter from "./includes/Main/MainRouter";
function App() {
  return (
      <BrowserRouter>
        <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100%'}}>
            <Header/>
            <main style={{height:'1000px', marginBottom:'500px'}}>
                <MainRouter/>
            </main>
            <Footer/>
        </div>
      </BrowserRouter>
  );
}
export default App;
