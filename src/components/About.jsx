// import React from 'react';

// function About() {
//   return (
//     <section className="py-20 bg-white" id="about">
//       <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">About</h2>
//       <div className="max-w-4xl mx-auto text-center">
//         <h3 className="text-2xl font-semibold mb-4">Hi! I'm a junior web developer</h3>
//         <p className="text-gray-700">
//           I'm attending a full-stack developer course, enhancing my skills with hands-on practice.
//           This is part of my journey to turn my interest in web design and development, which began during the pandemic, into a career.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from 'react';


function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <h2 className="about__subtitle">HI! I'm a junior web developer</h2>
        <p className="about__text">
          I'm attending a full-stack developer course, enhancing my skills with hands-on practice.
          This is part of my journey to turn my interest in web design and development, which began
          during the pandemic, into a career.
        </p>
      </div>
    </section>
  );
}

export default About;