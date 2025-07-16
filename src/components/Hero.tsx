import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from 'lucide-react';
export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // Animated typewriter effect for name and title
  const nameFirst = 'Sandaruwan';
  const nameLast = 'Aththanayaka';
  const title = 'Full Stack Developer';
  const [displayedNameFirst, setDisplayedNameFirst] = useState('');
  const [displayedNameLast, setDisplayedNameLast] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let nameFirstIndex = 0;
    let nameLastIndex = 0;
    let titleIndex = 0;
    let nameFirstInterval: NodeJS.Timeout;
    let nameLastInterval: NodeJS.Timeout;
    let titleInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    function animateName() {
      setDisplayedNameFirst('');
      setDisplayedNameLast('');
      setDisplayedTitle('');
      nameFirstIndex = 0;
      nameLastIndex = 0;
      titleIndex = 0;
      nameFirstInterval = setInterval(() => {
        setDisplayedNameFirst((prev) => prev + nameFirst[nameFirstIndex]);
        nameFirstIndex++;
        if (nameFirstIndex === nameFirst.length) {
          clearInterval(nameFirstInterval);
          setTimeout(() => animateNameLast(), 200);
        }
      }, 80); // medium speed
    }
    function animateNameLast() {
      nameLastInterval = setInterval(() => {
        setDisplayedNameLast((prev) => prev + nameLast[nameLastIndex]);
        nameLastIndex++;
        if (nameLastIndex === nameLast.length) {
          clearInterval(nameLastInterval);
          setTimeout(() => animateTitle(), 400);
        }
      }, 80); // medium speed
    }
    function animateTitle() {
      titleInterval = setInterval(() => {
        setDisplayedTitle((prev) => prev + title[titleIndex]);
        titleIndex++;
        if (titleIndex === title.length) {
          clearInterval(titleInterval);
          // Reset after a pause
          resetTimeout = setTimeout(() => {
            setDisplayedNameFirst('');
            setDisplayedNameLast('');
            setDisplayedTitle('');
            animateName();
          }, 1800);
        }
      }, 50);
    }
    animateName();
    return () => {
      clearInterval(nameFirstInterval);
      clearInterval(nameLastInterval);
      clearInterval(titleInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  return <section id="hero" className="min-h-screen w-full flex flex-col justify-center items-center relative pt-16 bg-gray-900 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape bg-shape-1 bg-purple-600 w-96 h-96 rounded-full -top-20 -left-20"></div>
        <div className="bg-shape bg-shape-2 bg-indigo-600 w-96 h-96 rounded-full top-1/3 -right-20"></div>
        <div className="bg-shape bg-shape-3 bg-violet-600 w-80 h-80 rounded-full bottom-10 left-1/4"></div>
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500 mx-auto mb-8 photo-animate">
            <img src="/public\WhatsApp Image 2025-07-07 at 06.46.21_d2be712b.jpg" alt="Sandaruwan Aththanayaka profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="overflow-hidden">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-center inline-block typewriter`}>
            <span className="text-white">{displayedNameFirst}</span>{' '}
            <span className="text-purple-500">{displayedNameLast}</span>
          </h1>
        </div>
        <h2 className={`text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {displayedTitle}
        </h2>
        <p className={`max-w-xl text-lg text-gray-400 mb-10 transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          I create elegant solutions to complex problems with code. Passionate
          about building intuitive, high-performance web applications.
        </p>
        <div className={`flex space-x-4 mb-16 transition-all duration-1000 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Contact Me
          </a>
          <a href="#projects" className="bg-gray-800 hover:bg-gray-700 text-purple-400 border border-purple-500 px-8 py-3 rounded-md font-medium transition-colors">
            View Work
          </a>
        </div>
        <div className={`flex space-x-6 transition-all duration-1000 delay-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="https://github.com/sandaruwank" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sandaruwan-kanchana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://www.instagram.com/sandaruwan_kanchana_a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <InstagramIcon size={24} />
          </a>
          <a href="https://web.facebook.com/sandaruwan.aththanayaka.90" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <FacebookIcon size={24} />
          </a>
          <a href="https://www.youtube.com/@sandaruwanaththanayaka6610" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <YoutubeIcon size={24} />
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-500 transition-colors animate-bounce" onClick={e => {
      e.preventDefault();
      document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth'
      });
    }}>
        <ChevronDownIcon size={32} />
      </a>
    </section>;
};