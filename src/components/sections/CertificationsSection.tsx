'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
  certificateImage: string; // <-- renamed from `logo`
  highlighted: boolean;
  importance: 'gold' | 'silver' | 'bronze' | 'blue';
  category: 'certification' | 'workshop' | 'hackathon';
};

const achievements: Achievement[] = [
  {
    title: 'Complete Python Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    description: 'From Zero to Hero in Python with real-world projects.',
    credentialUrl: '',
    certificateImage: '/certificates/Udemy(py).png',
    highlighted: false,
    importance: 'blue',
    category: 'certification'
  },
  {
    title: 'Beginning C++ Programming',
    issuer: 'Udemy',
    date: '2024',
    description: 'From Beginner to Beyond – C++ fundamentals and OOP.',
    credentialUrl: '',
    certificateImage: '/certificates/C++ Course Certificate(Udemy).png',
    highlighted: false,
    importance: 'blue',
    category: 'certification'
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL (IIT)',
    date: '2024',
    description: 'Top 5% achiever, Silver Medal, 12-week course.',
    credentialUrl: '',
    certificateImage: '/certificates/Programming in Java.png',
    highlighted: true,
    importance: 'silver',
    category: 'certification'
  },
  {
    title: 'Deep Learning Onramp',
    issuer: 'MathWorks',
    date: '2025',
    description: 'Introductory course to deep learning and neural networks.',
    credentialUrl: '',
    certificateImage: '/certificates/DIP(Certificate-6).png',
    highlighted: false,
    importance: 'blue',
    category: 'certification'
  },
  {
    title: 'Machine Learning Onramp',
    issuer: 'MathWorks',
    date: '2025',
    description: 'Core ML concepts using MATLAB.',
    credentialUrl: '',
    certificateImage: '/certificates/DIP(Certificate-5).png',
    highlighted: false,
    importance: 'blue',
    category: 'certification'
  },
  {
    title: 'GIT101 Workshop',
    issuer: 'Alexa Developers Club, SRM',
    date: '2023',
    description: 'Introductory hands-on session on Git and GitHub workflows.',
    credentialUrl: '',
    certificateImage: '/certificates/GIT101.png',
    highlighted: false,
    importance: 'blue',
    category: 'workshop'
  },
  {
    title: 'ARCADE INTELLIGENCE',
    issuer: 'NextGenAI Club, SRMIST',
    date: '2023',
    description: 'Bootcamp on Machine Learning fundamentals.',
    credentialUrl: '',
    certificateImage: '/certificates/nxtgenai.png',
    highlighted: false,
    importance: 'blue',
    category: 'workshop'
  },
  {
    title: 'Pentathlon 2.0 – Appathon',
    issuer: 'NextGenAI Club, SRMIST',
    date: '2025',
    description: 'Secured 2nd place in app development challenge.',
    credentialUrl: '',
    certificateImage: '/certificates/Appathon.png',
    highlighted: true,
    importance: 'silver',
    category: 'hackathon'
  },
  {
    title: 'Hacktrax',
    issuer: 'Alexa Developers Club, SRM',
    date: '2025',
    description: 'Finalist in campus-wide innovation challenge.',
    credentialUrl: '',
    certificateImage: '/certificates/Hacktrax.png',
    highlighted: true,
    importance: 'blue',
    category: 'hackathon'
  },
  {
    title: 'Smart India Hackathon (Internal)',
    issuer: 'SRMIST',
    date: '2024',
    description: 'Participated in internal selection round for SIH.',
    credentialUrl: '',
    certificateImage: '/certificates/HelloWorld CODERS-1.png',
    highlighted: true,
    importance: 'blue',
    category: 'hackathon'
  },
  {
    title: 'The Great Bengaluru Hackathon',
    issuer: 'Govt. of Karnataka',
    date: '2025',
    description: 'Selected among top 100 teams from over 5000 entries.',
    credentialUrl: '',
    certificateImage: '/certificates/Bengaluru_Hackathon.png',
    highlighted: true,
    importance: 'blue',
    category: 'hackathon'
  },
  {
    title: 'Data Samurai – Datathon',
    issuer: 'CINTEL, Dept. of Computational Intelligence, SRMIST',
    date: '2025',
    description: 'Participated in competitive datathon organised by CINTEL Department.',
    credentialUrl: '',
    certificateImage: '/certificates/SIDDHESH M - BUG SMASHERS.png',
    highlighted: false,
    importance: 'blue',
    category: 'hackathon'
  },
  {
    title: "DATAKON'24",
    issuer: 'DSBS Department, SRMIST',
    date: '2024',
    description: 'Participated in hackathon organised by DSBS Department.',
    credentialUrl: '',
    certificateImage: '/certificates/DATAKON.png',
    highlighted: false,
    importance: 'blue',
    category: 'hackathon'
  },
  {
    title: "57th ENGINE'S DAY Coding Contest",
    issuer: 'IE(I) + Dept. of Computing Technologies, SRMIST',
    date: '2024',
    description: 'Finalist in coding challenge by IE(I) chapter.',
    credentialUrl: '',
    certificateImage: '/certificates/Codingcontest.png',
    highlighted: true,
    importance: 'blue',
    category: 'hackathon'
  },
  {
    title: "Creative Ingenuity'23",
    issuer: 'Dept. of Mechanical Engineering, SRMIST',
    date: '2023',
    description: '2nd prize in event for Engineering Graphics and Design Course.',
    credentialUrl: '',
    certificateImage: '/certificates/egd.png',
    highlighted: true,
    importance: 'silver',
    category: 'hackathon'
  }
];

const importanceColors = {
  gold: 'bg-yellow-500/20 text-yellow-400',
  silver: 'bg-gray-400/20 text-gray-300',
  bronze: 'bg-amber-700/20 text-amber-500',
  blue: 'bg-blue-500/20 text-blue-400'
};

const categoryColors = {
  certification: 'bg-purple-500/20 text-purple-400',
  workshop: 'bg-green-500/20 text-green-400',
  hackathon: 'bg-red-500/20 text-red-400'
};

const categoryTitles = {
  certification: 'Certifications',
  hackathon: 'Hackathons',
  workshop: 'Workshops'
};

export default function CertificationsSection() {
  // Group achievements by category
  const groupedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {} as Record<'certification'| 'hackathon' | 'workshop' , Achievement[]>);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 pt-12 sm:pt-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3 sm:mb-4">My Achievements</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Certifications, workshops, and hackathons that showcase my learning journey and accomplishments.
          </p>
        </motion.div>

        {(['hackathon','certification', 'workshop'] as const).map((category) => (
          <section key={category} className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text mb-6"
            >
              {categoryTitles[category]}
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {groupedAchievements[category]
                ?.slice()
                .sort((a, b) => {
                  // Highlighted first
                  if (a.highlighted && !b.highlighted) return -1;
                  if (!a.highlighted && b.highlighted) return 1;
                  const importanceOrder = { gold: 0, silver: 1, bronze: 2, blue: 3 };
                  if (a.highlighted && b.highlighted) {
                    return importanceOrder[a.importance] - importanceOrder[b.importance];
                  }
                  return 0;
                })
                .map((achievement, index) => {
                  const glowColors = {
                    gold: 'rgba(255, 215, 0, 0.7)',
                    silver: 'rgba(192, 192, 192, 0.7)',
                    bronze: 'rgba(92, 51, 23, 0.9)',
                    blue: 'rgba(0, 123, 255, 0.7)'
                  };
                  const glowColor = glowColors[achievement.importance];

                  return (
                    <motion.div
                      key={`${achievement.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gray-800/30 backdrop-blur-md rounded-xl overflow-hidden transition-colors group
                        ${achievement.highlighted 
                          ? `${importanceColors[achievement.importance]} animate-glow`
                          : 'border border-gray-700/50 hover:border-blue-500/50'}
                      `}
                      style={achievement.highlighted ? { ['--glow-color' as any]: glowColor } : undefined}
                    >
                      <div
                        className="relative aspect-[16/9] w-full bg-gray-900/50 cursor-pointer"
                        onClick={() => achievement.certificateImage && setSelectedImage(achievement.certificateImage)}
                        title="Click to preview"
                      >
                        {achievement.certificateImage ? (
                          <Image
                            src={achievement.certificateImage}
                            alt={achievement.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain p-2"
                            quality={85}
                            priority={index < 6}
                            loading={index < 6 ? "eager" : "lazy"}
                          />
                        ) : (
                          <div className="text-2xl font-bold text-gray-500 flex items-center justify-center h-full w-full">
                            {achievement.issuer.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col">
                        <h3 className="text-lg sm:text-xl font-semibold gradient-text mb-2 group-hover:text-blue-400 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-2">{achievement.issuer} • {achievement.date}</p>
                        <p className="text-sm sm:text-base text-gray-300 mb-3 line-clamp-2 flex-1">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
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
                alt="Certificate preview"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}