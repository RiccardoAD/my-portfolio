import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; // import About f';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
// import CV from './components/cv/Cv';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', scrollActive);

    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (

    <div className="App">
      <Header />
      <main>
    {/* <Router>
      <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;