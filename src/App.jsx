import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import CourseInfo from './CourseInfo';
import Header from './Header.jsx';
import Beyond from './Beyond.jsx';
import Footer from './footer.jsx'

function App() {

  return (
    <>
      <div className="bg">
        <div className="v-stripe"></div>
      </div>
      <div className="title">
        <h1>Exhibit Design Portfolio</h1>
      </div>

      <div className="container">
          <Header />
          
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="courseinfo" element={<CourseInfo />} />
            <Route path="beyond" element={<Beyond />} />
          </Routes>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default App
