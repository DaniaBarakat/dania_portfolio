import { Button } from '@mui/material';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Box from '@mui/material/Box';
import Skills from './components/Skills';
import WhatIDo from './components/WhatIDo';

function App() {
  return (
    <div className="App">
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
  </Box>
</Box>
    </div>
  );
}

export default App;
