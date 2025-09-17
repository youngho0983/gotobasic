import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./includes/Header/Header";
import Footer from "./includes/Footer/Footer";
function App() {
  return (
      <BrowserRouter>
        <div className="App" style={{display: 'flex', flexDirection: 'column', minHeight: '100%'}}>
            <Header></Header>
            <main style={{height:'1000px', marginBottom:'500px'}}>
                main_area
                <Routes>
                    <Route>

                    </Route>
                </Routes>
            </main>

            <Footer></Footer>
        </div>
      </BrowserRouter>
  );
}
export default App;
