'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Swift", description: "iOS app development with SwiftUI", icon: "devicon-swift-plain" },
      { name: "Dart", description: "Cross-platform mobile development", icon: "devicon-dart-plain" },
      { name: "Python", description: "Backend development and data science", icon: "devicon-python-plain" },
      { name: "Java", description: "Enterprise applications", icon: "devicon-java-plain" },
      { name: "C", description: "System programming", icon: "devicon-c-plain" },
      { name: "C++", description: "System programming", icon: "devicon-cplusplus-plain" },
      { name: "JavaScript", description: "Web development", icon: "devicon-javascript-plain" },
      { name: "HTML", description: "Web markup", icon: "devicon-html5-plain" },
      { name: "CSS", description: "Web styling", icon: "devicon-css3-plain" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", description: "Building modern web applications", icon: "devicon-react-original" },
      { name: "Next.js", description: "Server-side rendering and static generation", icon: "devicon-nextjs-original-wordmark" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: "devicon-tailwindcss-plain" },
      { name: "TypeScript", description: "Type-safe JavaScript development", icon: "devicon-typescript-plain" },
      { name: "SwiftUI", description: "Modern iOS UI development", icon: "devicon-swift-plain" },
      { name: "Flutter", description: "Cross-platform mobile UI framework", icon: "devicon-flutter-plain" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "FastAPI", description: "Modern Python web framework", icon: "devicon-python-plain" },
      { name: "Flask", description: "Lightweight Python web framework", icon: "devicon-flask-original" },
      { name: "Django", description: "Full-featured Python web framework", icon: "devicon-django-plain" },
      { name: "Node.js", description: "Server-side JavaScript runtime", icon: "devicon-nodejs-plain" },
      { name: "Express.js", description: "Web application framework", icon: "devicon-express-original" },
    ],
  },
  {
    category: "Database & APIs",
    items: [
      { name: "SQLite", description: "Lightweight database", icon: "devicon-sqlite-plain" },
      { name: "Supabase", description: "Backend as a Service", icon: "devicon-postgresql-plain" },
      { name: "Google Maps API", description: "Location services integration", icon: "devicon-google-plain" },
      { name: "Gemini API", description: "AI model integration", icon: "devicon-google-plain" },
      { name: "Sarvam API", description: "AI services integration", icon: "/skills/sarvam-ai-logo.png" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", description: "Version control", icon: "devicon-git-plain" },
      { name: "Firebase", description: "Backend as a Service", icon: "devicon-firebase-plain" },
      { name: "Figma", description: "UI/UX design", icon: "devicon-figma-plain" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-20 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8 sm:mb-16 bg-gray-800/30 backdrop-blur-md rounded-xl p-4 sm:p-8 border border-gray-700/50"
        >
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3 sm:mb-4">My Skills</h1>
          <p className="text-base sm:text-xl text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6 pb-2 border-b border-gray-700/50">{skill.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {skill.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="bg-gray-700/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      {item.icon.startsWith('/') ? (
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={24}
                          height={24}
                          className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert"
                        />
                      ) : (
                        <i className={`${item.icon} text-xl sm:text-2xl`}></i>
                      )}
                      <h3 className="text-base sm:text-lg font-medium text-white">{item.name}</h3>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm ml-7 sm:ml-9">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 