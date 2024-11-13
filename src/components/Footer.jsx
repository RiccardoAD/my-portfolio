// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6 text-center">
//       <div className="flex justify-center space-x-4 mb-4">
//         <a href="#" className="text-white hover:text-blue-500"><i className="bx bxl-facebook text-2xl"></i></a>
//         <a href="#" className="text-white hover:text-blue-500"><i className="bx bxl-instagram text-2xl"></i></a>
//         <a href="#" className="text-white hover:text-blue-500"><i className="bx bxl-twitter text-2xl"></i></a>
//       </div>
//       <p className="text-sm">&copy; RA. All rights reserved</p>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="#" className="footer__icon"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="footer__icon"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="footer__icon"><i className="bx bxl-twitter"></i></a>
      </div>
      <p className="footer__copy">&#169; RA. All rights reserved</p>
    </footer>
  );
}

export default Footer;