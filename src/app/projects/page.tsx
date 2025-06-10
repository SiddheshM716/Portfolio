'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from './data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 pt-12 sm:pt-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3 sm:mb-4">My Projects</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A collection of my work showcasing my skills in full-stack development, mobile app development, and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative aspect-[16/9] w-full bg-gray-900/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                    quality={75}
                    priority={index < 6}
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold gradient-text mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-blue-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-blue-400 rounded-full text-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 