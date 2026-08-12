import { useState } from "react";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";

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
import Reveal from "./components/Reveal";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
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

              <Reveal>
                <About />
              </Reveal>

              <Reveal delay={50}>
                <Skills />
              </Reveal>

              <Reveal delay={100}>
                <WhatIDo />
              </Reveal>

              <Reveal delay={100}>
                <Projects />
              </Reveal>

              <Reveal delay={100}>
                <Education />
              </Reveal>

              <Reveal delay={100}>
                <Contact />
              </Reveal>

              <Reveal>
                <Footer />
              </Reveal>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;