import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Education from './Education'
import './App.css';
import Exprience from './Exprience';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')} />
      <Hero />
      <About />
      <Exprience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;