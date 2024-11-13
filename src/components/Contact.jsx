// import React from 'react';

// function Contact() {
//   return (
//     <section className="py-20 bg-gray-50" id="contact">
//       <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">Contact</h2>
//       <div className="max-w-2xl mx-auto">
//         <form id="contact-form" className="space-y-4">
//           <input type="text" id="user_name" placeholder="Name" className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500" required />
//           <input type="email" id="user_email" placeholder="Email" className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500" required />
//           <textarea id="message" placeholder="Your message" className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"></textarea>
//           <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
    const [isSending, setIsSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_eipzrie';
    const templateID = 'template_0lix61m';
    const publicKey = 'o_tqfhwXbsdZzwJgX';

    emailjs.init(publicKey);

    const inputFields = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      message: e.target.message.value,
    };

    emailjs.send(serviceID, templateID, inputFields).then(
      () => {
        alert('Message sent successfully');
        e.target.reset();
        setIsSending(false);
      },
      (error) => {
        console.error(error);
        alert('Error, please try again');
        setIsSending(false);
      }
    );
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form id="contact-form" className="contact__form">
          <input type="text" id="user_name" placeholder="Name" className="contact__input" name="name" required />
          <input type="email" id="user_email" placeholder="Email" className="contact__input" name="email" required />
          <textarea id="message" cols="0" rows="10" className="contact__input"></textarea>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;