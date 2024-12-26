import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Meron Belachew</h1>
            
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#about" className="block hover:text-blue-600">About</a>
              <a href="#projects" className="block hover:text-blue-600">Projects</a>
              <a href="#contact" className="block hover:text-blue-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Meron Belachew</h1>
            <p className="text-xl text-gray-600 mb-8">A brief tagline about what you do</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600">
              Your brief bio goes here. Talk about your background, skills, and what drives you.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project One</h3>
              <p className="text-gray-600 mb-4">Brief description of your first project</p>
              <button className="text-blue-600 hover:text-blue-700">Learn More →</button>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4">Brief description of your second project</p>
              <button className="text-blue-600 hover:text-blue-700">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Meron Belachew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;