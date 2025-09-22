'use client';

import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // Must start with NEXT_PUBLIC_ to work on client side
  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY!;
  const templateKey = process.env.NEXT_PUBLIC_TEMPLATE_KEY!;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  const [status, setStatus] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      () => {
        setStatus(" Message sent successfully!");
        form.current?.reset(); // clear form after success
      },
      (error) => {
        console.error("FAILED...", error.text);
        setStatus(" Message failed to send.");
      }
    );
  };

  return (
    <section className="pt-30 lg:pt-20 px-4 mb-5 max-w-xl mx-auto">
      <h2 className="detailsHeading text-center">Contact Us</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
          required
        />

        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
          required
        />

        <label className="block text-gray-700 font-medium mb-1">Message</label>
        <textarea
          name="message"
          className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
          required
        />

        <input
          type="submit"
          value="Send"
          className="w-full bg-black text-white cursor-pointer font-semibold py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black transition"
        />
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default ContactUs;
