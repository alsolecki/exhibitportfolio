import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import CourseInfo from './CourseInfo';
import Header from './Header.jsx';
import Beyond from './Beyond.jsx';
import SiteNavBar from './navBar/SiteNavBar.jsx'

function App() {

  return (
    <>
      <SiteNavBar logoHeight="'88px'" />
      <div className="background-wrapper" style={{overflowY: 'hidden', scrollBehavior: 'none'}}>
        <div className="bg">
          <div className="v-stripe"></div>
        </div>
        <div className="title" style={{ marginTop: '27px', marginBottom: '27px', color: 'rgba(30, 30, 30, 0.3)' }}>
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
      </div>
    </>
  )
}

export default App
