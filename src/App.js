import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import PartyDetails from './components/PartyDetails';
import RSVP from './components/RSVP';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff66b2', // Sanrio pink
      light: '#ff99cc',
      dark: '#ff3399',
    },
    secondary: {
      main: '#66b3ff', // Light blue
      light: '#99ccff',
      dark: '#3399ff',
    },
    background: {
      default: '#fff0f5', // Light pink background
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Quintessential", "Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Quintessential", serif',
    },
    h2: {
      fontFamily: '"Quintessential", serif',
    },
    h3: {
      fontFamily: '"Quintessential", serif',
    },
    h4: {
      fontFamily: '"Quintessential", serif',
    },
    h5: {
      fontFamily: '"Quintessential", serif',
    },
    h6: {
      fontFamily: '"Quintessential", serif',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  const welcomeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const partyDetailsRef = useRef(null);
  const rsvpRef = useRef(null);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #fff0f5 0%, #fff5fa 100%)',
        }}>
          <Navbar 
            welcomeRef={welcomeRef}
            aboutMeRef={aboutMeRef}
            partyDetailsRef={partyDetailsRef}
            rsvpRef={rsvpRef}
          />
          <Box sx={{ 
            py: 2,
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: '2xl',
            mx: 'auto'
          }}>
            <Box ref={welcomeRef}>
              <Welcome />
            </Box>
            <Box ref={aboutMeRef}>
              <AboutMe />
            </Box>
            <Box ref={partyDetailsRef}>
              <PartyDetails />
            </Box>
            <Box ref={rsvpRef}>
              <RSVP />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
