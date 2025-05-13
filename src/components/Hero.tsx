import React from 'react';
import { ArrowDown } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero: React.FC = () => {
  const { name, title, summary, profiles } = portfolioData.basics;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-delay">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-in-delay-2">
          {summary}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-10 animate-fade-in-delay-3">
          {profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={profile.network}
            >
              <span className="underline">{profile.network}</span>
            </a>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-500 transition-colors animate-bounce-slow"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;