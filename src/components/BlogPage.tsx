//import React, { useState } from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import Footer from '../components/footer'; // Assuming you have a Footer component

// Define the structure of a blog post
interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  content: string;
}

// Blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Add Animations in React',
    category: 'Tutorial',
    date: 'October 2, 2024',
    author: 'Elikim',
    content: `In this tutorial, we will walk through how to add smooth animations in React using Framer Motion. Animations are crucial for modern web development, making pages more dynamic and interactive...`,
  },
  {
    id: 2,
    title: 'My Journey as a Full-stack Developer',
    category: 'Experience',
    date: 'September 25, 2024',
    author: 'Elikim',
    content: `My journey started with learning HTML and CSS in college, followed by diving into JavaScript, React, and backend technologies like Node.js. This journey taught me persistence, debugging skills, and the joy of building...`,
  },
  {
    id: 3,
    title: 'Top Tools for Building a Portfolio in 2024',
    category: 'Tutorial',
    date: 'October 1, 2024',
    author: 'Elikim',
    content: `When it comes to building a great portfolio in 2024, you need the right tools. From React and Tailwind CSS to deployment platforms like Vercel, this post explores the best technologies to showcase your projects...`,
  },
];

const BlogPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null); // Use the BlogPost interface

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
      <Navbar /> {/* Reuse Navbar for navigation */}

      <section className="bg-lightAccent py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-dark mb-12">My Blog</h1>

          {/* Blog Post Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-dark mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {post.category} | {post.date} | By {post.author}
                </p>
                <p className="text-dark mb-4">
                  {post.content.slice(0, 100)}... {/* Truncate content */}
                </p>
                <button
                  onClick={() => openModal(post)} // Open modal with selected post
                  className="text-primary hover:text-secondary font-semibold"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for displaying blog post details */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 absolute inset-0" onClick={closeModal} />
          <div className="bg-white rounded-lg overflow-hidden shadow-lg z-10 max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-bold mb-2">{selectedPost?.title}</h2>
            <p className="text-gray-600 mb-4">
              {selectedPost?.category} | {selectedPost?.date} | By {selectedPost?.author}
            </p>
            <p className="text-lg">{selectedPost?.content}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer /> {/* Reuse Footer for consistency */}
    </>
  );
};

export default BlogPage;
