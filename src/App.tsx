import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Now from './components/sections/Now';
import Contact from './components/sections/Contact';
import SectionDivider from './components/ui/SectionDivider';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
  };

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* Skip to content link for accessibility */}
        <Box
          component="a"
          href="#home"
          sx={{
            position: 'absolute',
            top: -100,
            left: 0,
            bgcolor: 'primary.main',
            color: 'white',
            p: 2,
            zIndex: 9999,
            '&:focus': {
              top: 0,
            },
          }}
        >
          Skip to content
        </Box>

        <Navbar
          activeSection={activeSection}
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
        />

        <Box component="main">
          <Hero setActiveSection={setActiveSection} />
          <Story setActiveSection={setActiveSection} />
          <SectionDivider variant="dot" />
          <Journey setActiveSection={setActiveSection} />
          <SectionDivider variant="gradient" />
          <Skills setActiveSection={setActiveSection} />
          <SectionDivider variant="line" />
          <Projects setActiveSection={setActiveSection} />
          <SectionDivider variant="dot" />
          <Now />
          <SectionDivider variant="gradient" />
          <Contact setActiveSection={setActiveSection} />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
