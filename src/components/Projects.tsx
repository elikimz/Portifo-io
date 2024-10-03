//import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/footer';
const Projects = () => {
  // Example projects data
  const projects = [
    {
      title: 'Gaias Carpets',
      description: 'A luxurious online store designed to enhance home comfort with exquisite carpet selections. Built with React and Node.js, the platform features a responsive design and smooth animations, providing users with an engaging shopping experience',
      link: 'https://www.gaiascarpets.store/',
    },
    {
      title: 'To-Do List Application',
      description: 'A user-friendly to-do list application designed to help users efficiently manage their tasks and enhance productivity. Built with React, this application features an intuitive interface for adding, editing, and deleting tasks, along with options for categorizing and prioritizing them. Users can easily track their progress and stay organized, ensuring they never miss a deadline. The app emphasizes responsiveness and accessibility, making task management seamless across devices.',
      link: 'https://to-do-list-rho-one-79.vercel.app/',
    },
    {
      title: 'Project 3',
      description: 'The Car Management System is a comprehensive web-based solution designed to streamline the operations of a car dealership or rental service. The system allows for efficient management of car inventory, customer records, and transaction histories. Key features include adding and editing car listings, tracking car availability, and managing customer bookings. The system offers an intuitive user interface, secure data handling, and real-time updates on vehicle status, ensuring a seamless experience for both administrators and users. This project was built with modern web technologies, focusing on scalability and user-friendliness.',
      link: 'https://final-project-frontend-nz6b.vercel.app/',
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
