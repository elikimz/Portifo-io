import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/Homepage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';




  const App: React.FC = () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Hero/>,
        // errorElement: <Error />,
      },
      {
        path: 'AboutMe',
        element: <AboutMe/>,
        // errorElement: <Error />,
      },
      {
        path: 'Projects',
        element: <Projects/>,
        // errorElement: <Error />,
      },
      {
        path: ' Navbar',
        element: < Navbar/>,
        // errorElement: <Error />,
      },
      {
        path: 'Contact',
        element: <Contact/>,
        // errorElement: <Error />,
      },
   
   
   
   
   
      
      
      
   
     
      
      
      
      
      
     


   
   
        
   
   
   
   
   
   
      
   
   
    ]);
    return (
      <RouterProvider router={router} />
    );
}

export default App
