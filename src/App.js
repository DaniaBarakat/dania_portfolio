import { Button } from '@mui/material';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Box from '@mui/material/Box';
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
  </Box>
</Box>
    </div>
  );
}

export default App;
