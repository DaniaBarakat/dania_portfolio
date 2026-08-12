import Box from "@mui/material/Box";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
        }}
      >
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
  );
}

export default App;