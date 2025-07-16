import React from 'react';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
export const Experience = () => {
  const workExperience = [{
    id: 4,
    title: 'UI/UX Designer (Freelancer)',
    company: 'Fiverr',
    period: '2022 - Present',
    description: 'Provided UI/UX design services for various clients globally, delivering modern and user-friendly interfaces for web and mobile applications.'
  }, {
    id: 5,
    title: 'UI/UX Engineer',
    company: 'Primiyo Corporation',
    period: '2023 - 2025',
    description: 'Worked on designing and improving user experiences for enterprise applications, collaborating closely with product and development teams.'
  }, {
    id: 6,
    title: 'Full Stack Developer (Internship)',
    company: 'EWIS Company',
    period: '25/04/2023 - 25/10/2023',
    description: 'Completed a 6-month internship focusing on full stack development, contributing to real-world projects and gaining hands-on experience with modern web technologies.'
  }];
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Sri Lanka Institute of Information Technology',
      period: '2021 - 2025',
      description: 'Graduated with honors. Coursework included data structures, algorithms, web development, and database management.'
    }, {
      id: 2,
      degree: 'G.C.E ADVANCED LEVEL',
      institution: 'Sri Darmaloka College',
      period: '2017 - 2019',
      description: 'Completed G.C.E Advanced Level with focus on Biology, Physics, and Chemistry.'
    }, {
      id: 3,
      degree: 'G.C.E ORDINARY LEVEL',
      institution: 'Sri Darmaloka College',
      period: '2016',
      description: 'Completed G.C.E Ordinary Level with distinction in core subjects.'
    }
  ];
  return <section id="experience" className="py-24 bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            My professional journey and educational background that shaped my
            expertise.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-8 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-gray-700 p-3 rounded-full mr-4">
                <BriefcaseIcon className="text-purple-500" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-200">
                Work Experience
              </h3>
            </div>
            <div className="relative pl-8 border-l-2 border-gray-700">
              {workExperience.map((item, index) => <div key={item.id} className="mb-10 relative animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className="absolute -left-[41px] w-5 h-5 bg-purple-600 rounded-full border-4 border-gray-800"></div>
                  <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-xl font-semibold text-gray-200">
                        {item.title}
                      </h4>
                      <span className="text-sm font-medium text-purple-400 bg-gray-800 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Education */}
          <div>
            <div className="flex items-center mb-8 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
              <div className="bg-gray-700 p-3 rounded-full mr-4">
                <GraduationCapIcon className="text-purple-500" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-200">
                Education
              </h3>
            </div>
            <div className="relative pl-8 border-l-2 border-gray-700">
              {education.map((item, index) => <div key={item.id} className="mb-10 relative animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className="absolute -left-[41px] w-5 h-5 bg-purple-600 rounded-full border-4 border-gray-800"></div>
                  <div className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-xl font-semibold text-gray-200">
                        {item.degree}
                      </h4>
                      <span className="text-sm font-medium text-purple-400 bg-gray-800 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};