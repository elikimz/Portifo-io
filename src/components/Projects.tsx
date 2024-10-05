import { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/footer';

const Projects = () => {
  // Example projects data
  const projects = [
    {
      title: 'Gaias Carpets',
      description: 'A luxurious online store designed to enhance home comfort with exquisite carpet selections. Built with React and Node.js, the platform features a responsive design and smooth animations, providing users with an engaging shopping experience',
      additionalInfo: 'This project allows users to browse various carpet styles, filter by category, and enjoy a seamless shopping experience with integrated payment options.',
      link: 'https://www.gaiascarpets.store/',
    },
    {
      title: 'To-Do List Application',
      description: 'A user-friendly to-do list application designed to help users efficiently manage their tasks and enhance productivity. Built with React, this application features an intuitive interface for adding, editing, and deleting tasks.',
      additionalInfo: 'The app also includes features for categorizing tasks and setting deadlines, ensuring users can manage their time effectively.',
      link: 'https://to-do-list-rho-one-79.vercel.app/',
    },
    {
      title: 'Car Management System',
      description: 'The Car Management System is a comprehensive web-based solution designed to streamline the operations of a car dealership or rental service.',
      additionalInfo: 'It includes features for managing inventory, customer records, and booking transactions, all in a secure environment.',
      link: 'https://final-project-frontend-nz6b.vercel.app/',
    },
    {
      title: 'Weather App',
      description: 'The Weather App is a responsive web application that provides real-time weather information for various locations around the globe.',
      additionalInfo: 'It features a user-friendly interface for inputting city names or coordinates, displaying essential weather data.',
      link: 'https://weather-wheat-alpha.vercel.app/',
    },
    {
      title: 'Dog Gallery Application',
      description: 'The Dog Gallery Application serves as a comprehensive resource for dog lovers and enthusiasts, showcasing the diversity of dog breeds while providing an engaging and interactive user experience. ',
      additionalInfo: 'This project highlights my ability to create user-centric applications with a strong focus on performance and design.',
      link: 'https://dogs-roan-omega.vercel.app/',
    },
    {
      title: 'Cryptocurrency Tracker Application',
      description: 'The Cryptocurrency Tracker Application serves as a valuable resource for both novice and experienced cryptocurrency investors, providing essential market data and insights to aid decision-making.',
      additionalInfo: 'This project demonstrates my ability to build feature-rich applications that prioritize user engagement and deliver real-time information in a clean and efficient manner.',
      link: 'https://crypto-theta-dun.vercel.app/',
    },
    {
      title: 'NASA Astronomy Picture of the Day Application',
      description: 'The NASA Astronomy Picture of the Day Application serves as a captivating resource for astronomy enthusiasts and the general public alike, offering daily inspiration through the beauty of our universe.',
      additionalInfo: 'This project highlights my ability to create interactive and visually appealing applications that leverage real-time data while enhancing user engagement and educational value.',
      link: 'https://nasa-bay.vercel.app/',
    },
    {
      title: 'Country Data Application',
      description: 'The Country Data Application is a dynamic React-based web application that provides users with comprehensive information about countries worldwide. ',
      additionalInfo: 'Utilizing the REST Countries API, the application allows users to explore key details such as population, area, region, and subregion of various countries, all displayed through an intuitive and visually appealing interface.',
      link: 'https://news-snowy-three.vercel.app/',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // State to track expanded cards

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle visibility
  };

  return (
    <>
      <Navbar /> {/* Navbar at the top of the page */}
      <section className="py-20 bg-lightAccent">
        <h2 className="text-4xl font-bold text-dark mb-8 text-center">My Projects</h2>

        {/* Display existing projects in card format */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-lg text-dark mb-4">{project.description}</p>
                {expandedIndex === index && (
                  <p className="text-md text-dark mb-4">{project.additionalInfo}</p>
                )}
              </div>
              <button
                onClick={() => toggleDescription(index)}
                className="mt-2 text-blue-500 underline"
              >
                {expandedIndex === index ? 'See Less' : 'See More'}
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2"
              >
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
