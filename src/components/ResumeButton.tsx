import React from 'react';
import { FileDown } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ResumeButton: React.FC = () => {
  const { resumeUrl } = portfolioData.basics;

  return (
    <a
      href={resumeUrl}
      download
      className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FileDown size={16} />
      <span>Resume</span>
    </a>
  );
};

export default ResumeButton;