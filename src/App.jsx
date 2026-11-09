import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import HomeDark2 from './pages/HomeDark2';
import HomeV3 from './pages/HomeV3';
import HomeV2 from './pages/HomeV2';
import HomeV1 from './pages/HomeV1';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import VersionToggle from './components/VersionToggle';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Preloader />
        <CustomCursor />
        <Navbar />
        <VersionToggle />
        <main>
          <Routes>
            <Route path="/" element={<HomeDark2 />} />
            <Route path="/dark2" element={<HomeDark2 />} />
            <Route path="/v4" element={<HomeDark2 />} />
            <Route path="/v3" element={<HomeV3 />} />
            <Route path="/white" element={<HomeV3 />} />
            <Route path="/v2" element={<HomeV2 />} />
            <Route path="/v1" element={<HomeV1 />} />
            <Route path="/old" element={<HomeV1 />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;
