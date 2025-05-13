import React from 'react';
import portfolioData from '../data/portfolio.json';

const About: React.FC = () => {
  const { bio } = portfolioData.about;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img
                src={"../../public/IMG_20250217_154359.jpg"}
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;