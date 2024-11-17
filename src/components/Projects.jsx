// import React from 'react';

// function Projects() {
//   return (
//     <section className="py-20 bg-white" id="work">
//       <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">Projects</h2>
//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img src="./assets/img/work2.png" alt="Project 1" className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">Html Css</h3>
//             <p className="text-gray-700 mb-4">Landing page for a water filter company</p>
//             <a href="https://github.com/RiccardoAD/Progetto-intro-Sviluppo-di-Riccardo-Adorni" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//               Repo
//             </a>
//           </div>
//         </div>
//         {/* Add more project cards */}
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React from 'react';
import work2Image from '../assets/img/work2.png'; // Importa le immagini
import work1Image from '../assets/img/work1.png';
import work3Image from '../assets/img/work3.png';
import work4Image from '../assets/img/work4.png';
import work5Image from '../assets/img/work5.png';


function Projects() {
  return (
        <section className="work section" id="work">
          <h2 className="section-title">Projects</h2>
          <div className="work__container bd-grid">
            
            {/* Card 1 */}
            <div className="card">
              <img src={work2Image} className="work__img" alt="project2" />
              <div className="card__body">
                <h2 className="card__title">Html Css</h2>
                <p className="card__info">Landing page for a water filter company</p>
                <a
                  href="https://github.com/RiccardoAD/Progetto-intro-Sviluppo-di-Riccardo-Adorni"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card__btn">repo</button>
                </a>
              </div>
            </div>
    
            {/* Card 2 */}
            <div className="card">
              <img src={work1Image} className="work__img" alt="project1" />
              <div className="card__body">
                <h2 className="card__title">Laravel</h2>
                <p className="card__info">Hotel management system</p>
                <a
                  href="https://github.com/RiccardoAD/epicode-full-stack-ptoject"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card__btn">repo</button>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={work3Image} className="work__img" alt="project1" />
              <div className="card__body">
                <h2 className="card__title">react</h2>
                <p className="card__info">vegetrian website
                </p>
                <a
                  href="https://github.com/RiccardoAD/leafybite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card__btn">repo</button>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={work4Image} className="work__img" alt="project1" />
              <div className="card__body">
                <h2 className="card__title">wordpress</h2>
                <p className="card__info">theme 1</p>
                <a
                  href="https://komododecks.com/recordings/1rRSCTwNClqNNjVO07kl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card__btn">repo</button>
                </a>
              </div>
            </div>
            <div className="card">
              <img src={work5Image} className="work__img" alt="project1" />
              <div className="card__body">
                <h2 className="card__title">WordPress</h2>
                <p className="card__info">theme 2 </p>
                <a


                  href="https://komododecks.com/recordings/grZwzwvqJDZAyHZIyMkC"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="card__btn">repo</button>
                </a>
              </div>
            </div>
    
          </div>
        </section>
      );
    }
    
    export default Projects;