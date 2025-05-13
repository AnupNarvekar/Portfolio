import React from 'react';
import portfolioData from '../data/portfolio.json';

const Experience: React.FC = () => {
  const { experience, education } = portfolioData;

  // Function to format date
  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short'
    }).format(date);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience & Education
        </h2>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Work Experience</h3>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 sm:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full mt-1.5"></div>
                
                {/* Timeline line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-[7px] top-4 bottom-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                )}
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.position} @ <a href={job.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{job.company}</a>
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {formatDate(job.startDate)} — {formatDate(job.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.summary}</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Education</h3>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 sm:pl-12">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full mt-1.5"></div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.studyType} in {edu.area}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">Relevant Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;