//import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// About Me page component
const AboutMe = () => {
  return (
    <>
      <Navbar /> {/* Navbar at the top of the page */}
      <section id="about" className="py-20 bg-lightAccent">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-dark mb-8 text-center">About Me</h2>
          <p className="text-lg text-dark mb-6">
            I’m a passionate full-stack developer with experience in building dynamic and responsive web applications using modern tools like React, Node.js, PostgreSQL, and more. I enjoy solving complex problems and bringing ideas to life through code.
          </p>
          <h3 className="text-3xl font-semibold text-accent mt-8 mb-4">Skills</h3>
          <ul className="list-disc list-inside text-dark">
            <li>Frontend: React, JavaScript, HTML, CSS, TypeScript</li>
            <li>Backend: Node.js, Hono, Express</li>
            <li>Databases: PostgreSQL, MySQL</li>
            <li>DevOps/Tools: Docker, Git, Vercel</li>
          </ul>
        </div>
      </section>
      <Footer /> {/* Footer at the bottom of the page */}
    </>
  );
};

export default AboutMe;
