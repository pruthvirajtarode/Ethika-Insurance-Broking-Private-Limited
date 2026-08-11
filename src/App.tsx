import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Workshop from './pages/Workshop';
import Opportunities from './pages/Opportunities';
import ResponsibleAI from './pages/ResponsibleAI';
import PitchReport from './pages/PitchReport';
import Demos from './pages/Demos';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/responsible-ai" element={<ResponsibleAI />} />
          <Route path="/pitch-report" element={<PitchReport />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
