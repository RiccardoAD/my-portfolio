// import React from 'react';

// function Skills() {
//   return (
//     <section className="py-20 bg-gray-50" id="skills">
//       <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">Skills</h2>
//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         <div className="p-4 bg-white rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4">Front-end Languages</h3>
//           <div className="flex items-center space-x-4">
//             <img src="https://icon-library.com/images/programming-code-icon/programming-code-icon-5.jpg" alt="Programming" className="w-10" />
//             <span className="text-gray-700">HTML, CSS, JavaScript, TypeScript</span>
//           </div>
//         </div>
//         {/* Add other skill sections */}
//       </div>
//     </section>
//   );
// }

// export default Skills;

import React from 'react';


function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">Take a look at some of the things I love working on.</p>
          {/* Front-end Skills */}
          <div className="skills__data">
            <div className="skills__names">
              <img src="https://icon-library.com/images/programming-code-icon/programming-code-icon-5.jpg" alt="programming" width="30" height="40" />
              <span className="skills__name">Front-end languages:</span>
              {/* Add icons for HTML, CSS, JavaScript, TypeScript */}
            </div>
          </div>
          {/* More skill sections can be added similarly */}
        </div>
      </div>
    </section>
  );
}

export default Skills;