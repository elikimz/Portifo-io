import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/footer';
const Projects = () => {
  // Example projects data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1. This project is built using React and Node.js.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2. This project focuses on utilizing PostgreSQL and Express.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3. This project demonstrates advanced JavaScript techniques.',
      link: '#',
    },
  ];

  return (
    <>
      <Navbar /> {/* Navbar at the top of the page */}
      <section className="py-20 bg-lightAccent">
        <h2 className="text-4xl font-bold text-dark mb-8 text-center">My Projects</h2>

        {/* Display existing projects in card format */}
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-lg text-dark mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer /> {/* Footer at the bottom of the page */}
    </>
  );
};

export default Projects;
