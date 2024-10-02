import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/Homepage';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import BlogPage from './components/BlogPage';




  const App: React.FC = () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Hero/>,
        // errorElement: <Error />,
      },
       {
        path: 'projects',
        element: <Projects/>,
        // errorElement: <Error />,
       },

      {
        path: 'navbar',
        element: <Navbar/>,
        // errorElement: <Error />,
      },
      {
        path: 'contact',
        element: <Contact/>,
        // errorElement: <Error />,
      },
     {
        path: 'about',
        element: <AboutMe/>,
        // errorElement: <Error />,
      },
      {
        path: 'blog',
        element: <BlogPage/>,
        // errorElement: <Error />,
      },
    
   
   
   
   
      
      
      
   
     
      
      
      
      
      
     


   
   
        
   
   
   
   
   
   
      
   
   
    ]);
    return (
      <RouterProvider router={router} />
    );
}

export default App
