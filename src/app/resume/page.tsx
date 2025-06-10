'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Resume</h1>
          <p className="text-xl text-gray-300 mb-8">
            View and download my professional resume
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-4"
        >
          <div className="aspect-[3/4] w-full">
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-lg"
              title="Resume PDF"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 