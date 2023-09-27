import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from '../Components/Header';

function InnerRoutes() {
    return (
      <section>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more child routes here */}
        </Routes>
        <Outlet /> {/* Render child routes */}
      </section>
    );
  }

export default InnerRoutes