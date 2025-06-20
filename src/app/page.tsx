'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from './projects/data';
import { skillsSummary } from './skills/data';
import CertificationsSection from '../components/sections/CertificationsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 border border-gray-700/50"
          >
            <h1 className="text-5xl font-bold gradient-text mb-6">
              Hi, I&apos;m Siddhesh Mohan
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate developer crafting digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">My Skills</h2>
            <p className="text-gray-300">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsSummary.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold gradient-text mb-4 pb-2 border-b border-gray-700/50">{category.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 bg-gray-700/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50"
                    >
                      {item.icon.startsWith('/') ? (
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 brightness-0 invert"
                        />
                      ) : (
                        <i className={`${item.icon} text-xl`}></i>
                      )}
                      <span className="text-gray-300 text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/skills"
              className="inline-block px-6 py-3 bg-blue-600/50 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700/50 transition-colors border border-gray-700/50"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <CertificationsSection />

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-gray-300">Some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700/50">
                    <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain bg-gray-100 dark:bg-gray-800"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold gradient-text mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full text-xs border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-blue-600/50 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700/50 transition-colors border border-gray-700/50"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-300 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600/50 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700/50 transition-colors border border-gray-700/50"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
