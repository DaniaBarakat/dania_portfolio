import { useState } from "react";

import Box from "@mui/material/Box";

import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={handleMobileMenuClose}
      />

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <MobileHeader
          onMenuClick={handleMobileMenuOpen}
        />

        <Box component="main">
          <Hero />
          <About />
          <Skills />
          <WhatIDo />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default App;