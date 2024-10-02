//import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Elikim. All rights reserved.
          </p>
          <p className="text-sm">Powered by KimTech Limited</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://linkedin.com/in/https://www.linkedin.com/feed/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-secondary"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/elikimz" // Your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-secondary"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/https://x.com/home" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-secondary"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:elijahkimani1293@gmail.com" // Your email
            className="flex items-center hover:text-secondary"
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" style={{ width: 24, height: 24 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
