//import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/footer'; // Import the Footer';
const Contact = () => {
  return (
    <>
      <Navbar /> {/* Navbar at the top of the page */}
      <section className="py-20 bg-lightAccent">
        <h2 className="text-4xl font-bold text-dark mb-8 text-center">Contact Me</h2>

        <div className="max-w-2xl mx-auto px-6">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer /> {/* Footer at the bottom of the page */}
    </>
  );
};

export default Contact;
