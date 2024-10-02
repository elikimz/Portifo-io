import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">My Portfolio</h1>
          </div>

          {/* Hamburger Icon */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-contrast focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Links for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-background hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-background hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About Me
              </Link>
              <Link to="/projects" className="text-background hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link to="/blog" className="text-background hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Blog {/* Blog Link Added */}
              </Link>
              <Link to="/contact" className="text-background hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-background hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-background hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About Me
            </Link>
            <Link to="/projects" className="text-background hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link to="/blog" className="text-background hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Blog {/* Blog Link Added for Mobile */}
            </Link>
            <Link to="/contact" className="text-background hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
