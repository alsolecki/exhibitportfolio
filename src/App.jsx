import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import CourseInfo from './CourseInfo';
import Header from './Header.jsx';
import Beyond from './Beyond.jsx';
import Footer from './footer.jsx'
import SiteNavBar from './navBar/SiteNavBar.jsx'

function App() {

  return (
    <>
      <SiteNavBar logoHeight="'88px'" />

      <div className="bg">
        <div className="v-stripe"></div>
      </div>
      <div className="title" style={{ marginTop: '84px', marginBottom: '4px', color: 'rgba(230, 230, 230, 0.5)'}}>
        <h3>Exhibit Design Portfolio</h3>
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
