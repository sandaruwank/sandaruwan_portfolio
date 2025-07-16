import React, { useEffect } from 'react';
import { CodeIcon, BrainIcon, PencilRulerIcon, GlobeIcon } from 'lucide-react';
export const About = () => {
  const skills = [{
    category: 'Frontend',
    color: 'bg-blue-600',
    items: [{
      name: 'React',
      image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
    }, {
      name: 'TypeScript',
      image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
    }, {
      name: 'Tailwind CSS',
      image: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg'
    }, {
      name: 'Next.js',
      image: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg'
    }]
  }, {
    category: 'Backend',
    color: 'bg-green-600',
    items: [{
      name: 'Node.js',
      image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
    }, {
      name: 'Express',
      image: 'https://cdn.worldvectorlogo.com/logos/express-109.svg'
    }, {
      name: 'MongoDB',
      image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
    }, {
      name: 'PostgreSQL',
      image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'
    }]
  }, {
    category: 'Tools',
    color: 'bg-amber-500',
    items: [{
      name: 'Git',
      image: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg'
    }, {
      name: 'Docker',
      image: 'https://cdn.worldvectorlogo.com/logos/docker.svg'
    }, {
      name: 'AWS',
      image: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg'
    }, {
      name: 'Jest',
      image: 'https://cdn.worldvectorlogo.com/logos/jest-2.svg'
    }]
  }, {
    category: 'Design',
    color: 'bg-rose-500',
    items: [{
      name: 'Figma',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }, {
      name: 'Adobe XD',
      image: 'https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg'
    }, {
      name: 'Sketch',
      image: 'https://cdn.worldvectorlogo.com/logos/sketch-2.svg'
    }, {
      name: 'Photoshop',
      image: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg'
    }]
  }, {
    category: 'Machine Learning & AI',
    color: 'bg-fuchsia-600',
    items: [
      {
        name: 'Python (for ML/DL)',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        name: 'TensorFlow',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
      },
      {
        name: 'Keras',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg'
      },
      {
        name: 'scikit-learn',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
      },
      {
        name: 'PyTorch',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
      },
      {
        name: 'Pandas & NumPy',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
      },
      {
        name: 'Jupyter Notebook',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
      },
      {
        name: 'OpenCV',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'
      }
    ]
  }];
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('animate-in');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="about" className="py-24 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            As a Computer Science and Engineering graduate, I bring a strong foundation in software development, problem-solving, and teamwork. I am a motivated and responsible individual who thrives in dynamic environments and is always eager to learn new technologies. My goal is to build a successful career in the software industry by contributing my full potential to innovative and impactful projects. I am looking forward to joining a forward-thinking team where I can grow both professionally and personally.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">
              My Journey
            </h3>
            <p className="text-gray-300 mb-4">
              I’m currently completing my BSc in Information Technology at SLIIT (2021–2025) while gaining hands-on industry experience. I successfully completed a 6-month internship at EWIS, where I contributed to real-world projects that strengthened my skills in web development and teamwork.
            </p>
            <p className="text-gray-300">
              In 2024, I began working as a Full Stack Developer at Primiyo Corporation, where I continue to expand my expertise by building scalable, high-quality applications.
            </p>
            <p className="text-gray-300">
              I’m passionate about staying up-to-date with the latest technologies and best practices to deliver software solutions that exceed expectations in performance, user experience, and code quality.
            </p>
          </div>
          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-300 transform translate-y-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">
              What I Do
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <CodeIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Web Development</h4>
                  <p className="text-gray-300">
                    Building responsive, performant web applications with modern
                    frameworks
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <BrainIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">Problem Solving</h4>
                  <p className="text-gray-300">
                    Finding elegant solutions to complex technical challenges
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <PencilRulerIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">UI/UX Design</h4>
                  <p className="text-gray-300">
                    Creating intuitive and beautiful user interfaces
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-lg mr-4">
                  <GlobeIcon className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">API Integration</h4>
                  <p className="text-gray-300">
                    Connecting systems and services through robust APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Skills Section with Real Logos */}
        <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500 transform translate-y-10">
          <h3 className="text-2xl font-semibold mb-10 text-center text-gray-200">
            My <span className="text-purple-500">Tech Stack</span>
          </h3>
          <div className="max-w-6xl mx-auto">
            {skills.map((category, categoryIndex) => <div key={categoryIndex} className="mb-16 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{
            transitionDelay: `${categoryIndex * 150}ms`
          }}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-xl">
                      {category.category.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    {category.category}
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {category.items.map((tech, techIndex) => <div key={techIndex} className="bg-gray-700 hover:bg-gray-600 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center group">
                      <div className="h-20 w-20 mb-4 flex items-center justify-center">
                        <img src={tech.image} alt={tech.name} className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h5 className="text-lg font-medium text-white text-center">
                        {tech.name}
                      </h5>
                    </div>)}
                </div>
              </div>)}
          </div>
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-gray-900/50 backdrop-blur-sm p-2 rounded-full">
              <div className="flex gap-2 items-center px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-gray-300 text-sm">
                  Always learning new technologies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};