'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12 pt-16"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">About Me</h1>
          <p className="text-gray-300 text-lg">
            A passionate full-stack developer with expertise in building modern web applications and mobile apps.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold gradient-text mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">B.Tech in Computer Science with Specialization in Big Data Analytics</h3>
                <p className="text-gray-300 mb-1">SRM Institute of Science and Technology</p>
                <p className="text-gray-400">2023 - 2027</p>
                <p className="text-blue-400 mt-2">CGPA: 9.0</p>
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold gradient-text mb-6">Interests</h2>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-700/50 text-white rounded-lg">Web Development</span>
              <span className="px-4 py-2 bg-gray-700/50 text-white rounded-lg">Mobile App Development</span>
              <span className="px-4 py-2 bg-gray-700/50 text-white rounded-lg">UI/UX Design</span>
              <span className="px-4 py-2 bg-gray-700/50 text-white rounded-lg">Open Source</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 