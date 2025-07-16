import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com',
    live: 'https://example.com'
  }, {
    id: 2,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with real-time updates. Built with React, Firebase, and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'Tailwind'],
    category: 'frontend',
    github: 'https://github.com',
    live: 'https://example.com'
  }, {
    id: 3,
    title: 'Finance Dashboard',
    description: 'An interactive finance dashboard with data visualization, user authentication, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['TypeScript', 'React', 'D3.js'],
    category: 'frontend',
    github: 'https://github.com',
    live: 'https://example.com'
  }, {
    id: 4,
    title: 'RESTful API Service',
    description: 'A scalable RESTful API built with Node.js, Express, and PostgreSQL. Features include authentication, rate limiting, and comprehensive documentation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    category: 'backend',
    github: 'https://github.com',
    live: 'https://example.com'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  const categories = [{
    id: 'all',
    name: 'All'
  }, {
    id: 'frontend',
    name: 'Frontend'
  }, {
    id: 'backend',
    name: 'Backend'
  }, {
    id: 'fullstack',
    name: 'Full Stack'
  }];
  return <section id="projects" className="py-24 bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Explore my recent projects showcasing my skills and expertise in web
            development.
          </p>
        </div>
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => <button key={category.id} onClick={() => setActiveFilter(category.id)} className={`px-5 py-2 rounded-full transition-colors ${activeFilter === category.id ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{
          transitionDelay: `${index * 150}ms`
        }}>
              <div className="h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="bg-gray-700 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-500 transition-colors">
                    <GithubIcon size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-500 transition-colors">
                    <ExternalLinkIcon size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};