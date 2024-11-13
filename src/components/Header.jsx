// import React from 'react';

// function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
//         <div>
//           <img src="./assets/img/logoV2.png" alt="logo" className="w-16" />
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
//           <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
//           <a href="#skills" className="text-gray-800 hover:text-blue-600">Skills</a>
//           <a href="#work" className="text-gray-800 hover:text-blue-600">Projects</a>
//           <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
//         </div>
//         <div className="block md:hidden">
//           <button className="text-gray-800">
//             <i className="bx bx-menu text-2xl"></i>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React, { useEffect } from 'react';
import logo from '../assets/img/logoV2.png'


function Header() {
    useEffect(() => {
        const toggle = document.getElementById('nav-toggle');
        const nav = document.getElementById('nav-menu');
        const toggleMenu = () => {
            nav.classList.toggle('show');
          };
    
        
          if (toggle && nav) {
            toggle.addEventListener('click', toggleMenu);
          }
        
    
        // Rimuovi il listener quando il componente viene smontato
        return () => {
            if (toggle) {
              toggle.removeEventListener('click', toggleMenu);
            }
          };
        }, []);
        
      useEffect(() => {
        const navLink = document.querySelectorAll('.nav__link');
        const navMenu = document.getElementById('nav-menu');
    
        function linkAction() {
          navMenu.classList.remove('show');
        }
    
        navLink.forEach(n => n.addEventListener('click', linkAction));
    
        // Rimuovi i listener quando il componente viene smontato
        return () => {
          navLink.forEach(n => n.removeEventListener('click', linkAction));
        };
      }, []);
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <img src= {logo} alt="logo" className="logo" />
          <a href="#" className="nav__logo"></a>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;