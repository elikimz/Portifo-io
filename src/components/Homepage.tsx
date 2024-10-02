import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Hero = () => {
  const imageUrl = 'https://i.postimg.cc/rFR2yQBn/3d-carton-of-boy-going-to-school-ai-photo.jpg'; // Hardcoded image URL

  return (
    <>
      <Navbar /> {/* Navbar at the top of the page */}
      <section 
        className="min-h-screen flex flex-col items-center px-4 py-8 md:flex-row"
        style={{
          background: 'linear-gradient(to right, #fafaec, #f4f3cd)', // Gradient background
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0"> {/* Flex container with spacing */}
          
          {/* Image Card Section */}
          <div className="w-full md:w-1/2 p-4 flex justify-center"> {/* Image section */}
            {imageUrl && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <img 
                  src={imageUrl} 
                  alt="Profile" 
                  className="w-full h-auto object-cover rounded-lg" // Adjust image display and rounded corners
                />
              </div>
            )}
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-4 text-center md:text-left"> {/* Text section */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-4">
              Hi, I'm <span className="text-primary">Elikim</span>
            </h1>
            <p className="text-lg sm:text-xl text-contrast mb-6">
              Full-stack Software Developer building innovative web solutions
            </p>
            <Link
              to="/projects"
              className="bg-primary text-background px-6 py-3 rounded-md text-lg font-semibold hover:bg-secondary transition duration-300"
            >
              View My Projects
            </Link>
          </div>
        </div>

        {/* CV Download Section */}
        <div className="mt-6 text-center w-full">
          <a
            href={"https://drive.google.com/file/d/1D6fnyG2yf4lA7b8WPwPRaDA6hcEz3yvh/view?usp=drive_link"} // Use the CV link variable
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security feature
            className="bg-primary text-background px-6 py-3 rounded-md text-lg font-semibold hover:bg-secondary transition duration-300"
          >
            Download My CV
          </a>
        </div>
      </section>
      <Footer /> {/* Footer at the bottom of the page */}
    </>
  );
};

export default Hero;
