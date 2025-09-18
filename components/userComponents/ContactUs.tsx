'use client';

import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

const ContactUs = () => {

//    const form = useRef();

//   const serviceKey = "service_c8z7cbg"
//   const templateKey = "template_37yxp52"
//   const publicKey  = "PneOTVPQaXcM4CPRd"

//   const [status, setStatus] = useState("")

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("Sending")
//     emailjs
//       .sendForm(serviceKey, templateKey, form.current, publicKey)
//       .then(
//         () => {
//           setStatus("Message sent")
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           setStatus("Message Failed")
//           console.log('FAILED...', error.text);
//         },
//       );
//   };
  return (
   <section className="pt-30 lg:pt-20 px-4 mb-5 max-w-xl mx-auto">
        <h2 className="detailsHeading text-center">Contact Us</h2>

  <form
    // ref={form}
    // onSubmit={sendEmail}
    className=" space-y-4"
  >
      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
        autoComplete="off"
        type="text"
        name="user_name"
        className="w-full border border-gray-300 outline-none rounded-md px-3 py-2 "
        required
      />

      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
        autoComplete="off"
        type="email"
        name="user_email"
        className="w-full border border-gray-300 outline-none rounded-md px-3 py-2 "
        required
      />
      <label className="block text-gray-700 font-medium mb-1">Message</label>
      <textarea
        name="message"
        className="w-full border border-gray-300 outline-none rounded-md px-3 py-2 "
        required
      />

    <input
      autoComplete="off"
      type="submit"
      value="Send"
      className="w-full bg-black hover:border hover:border-black text-white cursor-pointer font-semibold py-2 rounded-md hover:bg-white hover:text-black transition"
    />
    {/* {status} */}
  </form>
</section>
  )
}

export default ContactUs
