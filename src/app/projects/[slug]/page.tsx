'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data';
import { use, useState } from 'react';

interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  screenshots: string[];
  features: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p: Project) => p.slug === resolvedParams.slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 pt-12 sm:pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 sm:p-8 border border-gray-700/50"
            >
              <h1 className="text-2xl sm:text-4xl font-bold gradient-text mb-4 sm:mb-6">{project.title}</h1>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-blue-400 rounded-full text-xs sm:text-sm border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div 
                className="relative w-full h-[250px] sm:h-[400px] mb-8 sm:mb-12 rounded-xl overflow-hidden border border-gray-700/50 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority
                  quality={75}
                  loading="eager"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6">About the Project</h2>
                <p className="text-base sm:text-lg text-white leading-relaxed mb-8 sm:mb-12">
                  {project.description}
                </p>

                <div className="mb-8 sm:mb-12">
                  <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    {project.features.map((feature: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 sm:space-x-3 text-white bg-gray-800/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-gray-700/50"
                      >
                        <svg
                          className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm sm:text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 sm:mb-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Screenshots</h2>
                  <div className={`grid gap-4 sm:gap-6 ${
                    ['healthypaws', 'nammaauto', 'madurai-ward'].includes(project.slug)
                      ? 'grid-cols-2 sm:grid-cols-3'
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}>
                    {project.screenshots.map((screenshot: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative rounded-xl overflow-hidden shadow-lg border border-gray-700/50 bg-gray-900/50 cursor-pointer ${
                          ['healthypaws', 'nammaauto', 'madurai-ward'].includes(project.slug)
                            ? 'aspect-[9/16] w-full'
                            : 'aspect-[4/3]'
                        }`}
                        onClick={() => setSelectedImage(screenshot)}
                      >
                        <Image
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-contain hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          quality={75}
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-gray-700/50 mt-4 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold gradient-text mb-3 sm:mb-4">Project Link</h3>
                <div className="space-y-3 sm:space-y-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-600/50 transition-colors border border-gray-700/50 text-sm sm:text-base"
                    >
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-blue-600/50 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700/50 transition-colors border border-gray-700/50 text-sm sm:text-base"
                    >
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Project screenshot"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 