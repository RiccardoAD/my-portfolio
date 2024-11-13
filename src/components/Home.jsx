// import React from 'react';

// function Home() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100" id="home">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Hi, <br /> I'm <span className="text-blue-500">Riccardo</span> <br /> web developer
//         </h1>
//         <a href="./assets/cv/index.html" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
//           CV
//         </a>
//       </div>
//       <div className="flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
//         <a href="https://www.linkedin.com/in/riccardo-adorni-developer/" className="text-gray-800 hover:text-blue-600">
//           <i className="bx bxl-linkedin text-2xl"></i>
//         </a>
//         <a href="https://www.instagram.com/macinapietre/" className="text-gray-800 hover:text-blue-600">
//           <i className="bx bxl-instagram text-2xl"></i>
//         </a>
//         <a href="https://github.com/RiccardoAD" className="text-gray-800 hover:text-blue-600">
//           <i className="bx bxl-github text-2xl"></i>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import photo from '../assets/img/IMG-Photoroom.png';

function Home() {
//     const navigate = useNavigate();

//   const handleCVClick = () => {
//     navigate('/cv'); // Navigate to the CV route
//   };
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,<br />I'm <span className="home__title-color">Riccardo</span><br />
          web developer
        </h1>
        {/* <a onClick={handleCVClick} className="button">CV</a> */}
      </div>
      <div className="home__social">
      <a href="https://www.linkedin.com/in/riccardo-adorni-developer/" className="home__social-icon">
          <FaLinkedin size={24} /> {/* Icona LinkedIn */}
        </a>
        <a href="https://www.instagram.com/macinapietre/" className="home__social-icon">
          <FaInstagram size={24} /> {/* Icona Instagram */}
        </a>
        <a href="https://github.com/RiccardoAD" className="home__social-icon">
          <FaGithub size={24} /> {/* Icona GitHub */}
        </a>
      </div>
      <div className="home__img">
        <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            <image className="home__blob-img" x="50" y="60" href= {photo} />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Home;