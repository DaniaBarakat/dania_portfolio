import { useState } from "react";

import Box from "@mui/material/Box";
import {
  ThemeProvider,
} from "@mui/material/styles";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  lightTheme,
  darkTheme,
} from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode
    ? darkTheme
    : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Sidebar
  isDarkMode={isDarkMode}
  onToggleTheme={() => setIsDarkMode((prev) => !prev)}
/>

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
    </ThemeProvider>
  );
}

export default App;