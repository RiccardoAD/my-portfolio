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
import  gif from '../assets/img/professional skills.gif';

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
              <img
                src="https://icon-library.com/images/programming-code-icon/programming-code-icon-5.jpg"
                alt="Front-end icon"
                width="30"
                height="40"
              />
              &nbsp;
              <span className="skills__name">Front-end languages:</span>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                  alt="HTML5"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                  alt="CSS3"
                  width="30"
                  height="40"
                />
              </a>
              &nbsp;
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img
                  src="https://gitlab.schukai.com/uploads/-/system/group/avatar/139/javascript.png"
                  alt="JavaScript"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
                  alt="TypeScript"
                  width="35"
                />
              </a>
            </div>
            <div className="skills__bar skills__html"></div>
          </div>

          {/* Data Visualization Skills */}
          <div className="skills__data">
            <div className="skills__names">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRW9ooon2t8fhS_SBJfc8XS8nvkS4sveecQ&usqp=CAU"
                alt="Data visualization icon"
                width="30"
                height="40"
              />
              &nbsp;
              <span className="skills__name">Data Visualization:</span>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
                  alt="React"
                  width="40"
                  height="40"
                />
              </a>
              &nbsp;
              <a href="https://d3js.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/640px-Logo.min.svg.png"
                  alt="D3.js"
                  width="64"
                />
              </a>
              <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" rel="noreferrer">
                <img
                  src="https://www.logo.wine/a/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.svg"
                  alt="Excel"
                  width="64"
                />
              </a>
            </div>
            <div className="skills__bar skills__html"></div>
          </div>

          {/* Back-end Skills */}
          <div className="skills__data">
            <div className="skills__names">
              <img
                src="https://media.istockphoto.com/id/1238951588/vector/database-icon.jpg?s=612x612&w=0&k=20&c=FDz7njKjWIYhiV-CDgJoj8fkkmSrtv88Tv7SiN_E08Y="
                alt="Back-end icon"
                width="50"
              />
              <span className="skills__name">Back-end:</span>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                  alt="MySQL"
                  width="60"
                  height="40"
                />
              </a>
              &nbsp;
              <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Php-logo.png/640px-Php-logo.png"
                  alt="PHP"
                  width="40"
                  height="40"
                />
              </a>
            </div>
            <div className="skills__bar skills__js"></div>
          </div>

          {/* UX/UI Skills */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxs-paint skills__icon"></i>
              <span className="skills__name">UX/UI</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>
        </div>

        {/* Additional Skills Image */}
        <div>
          <img src={gif} alt="Skills GIF" className="skills__img" />
        </div>
      </div>
    </section>
  );
}

export default Skills;