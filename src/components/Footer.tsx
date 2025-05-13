import React from 'react';
import portfolioData from '../data/portfolio.json';

const Footer: React.FC = () => {
  const { name, profiles } = portfolioData.basics;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={profile.network}
              >
                {profile.network}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;