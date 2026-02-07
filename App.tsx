import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Admin from './pages/Admin';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
};

const AppContent = () => {
  useLocation(); // Keep for route-change re-renders
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-primary-500 selection:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <SiteProvider>
      <Router>
        <AppContent />
      </Router>
    </SiteProvider>
  );
}

export default App;