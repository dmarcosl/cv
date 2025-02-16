import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { lightTheme, darkTheme } from './theme/theme';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const { t } = useTranslation();
  const sections = t('sections', { returnObjects: true });
  
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  const currentTheme = createTheme(theme === 'light' ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
        <Header onThemeChange={handleThemeChange} />
        <About />
        {sections.experience && <Experience />}
        {sections.projects && <Projects />}
        {sections.skills && <Skills />}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 