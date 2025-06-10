export interface Project {
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

export const projects: Project[] = [
  {
    slug: 'madurai-ward',
    title: 'Madurai Tech Ward App',
    description: 'A mobile application displaying civic ward data for Madurai. Built with Flutter, this app helps citizens access information about their local ward and civic services.',
    techStack: ['Flutter', 'Google Maps API', 'Supabase'],
    image: '/projects/madurai-ward/image2.png',
    screenshots: [
      '/projects/madurai-ward/image1.png',
      '/projects/madurai-ward/image2.png',
      '/projects/madurai-ward/image3.png',
      '/projects/madurai-ward/image4.png',
      '/projects/madurai-ward/image5.png',
      '/projects/madurai-ward/image6.png',
      '/projects/madurai-ward/image7.png',
      '/projects/madurai-ward/image8.png',
      '/projects/madurai-ward/image9.png',
      '/projects/madurai-ward/image10.png',
      '/projects/madurai-ward/image11.png',
      '/projects/madurai-ward/image12.png'
    ],
    features: [
      'Ward boundary visualization',
      'Civic service information',
      'Complaint registration and tracking',
      'Local representative contact details'

    ],
    githubLink: 'https://github.com/Aadithyaa-Ravishankar/Madurai/tree/siddhesh'
  },
  {
    slug: 'nammaauto',
    title: 'NammaAuto',
    description: 'A mobile application for auto-rickshaw booking with real-time tracking. Built with Flutter and integrated with Google Maps, NammaAuto provides a convenient way to book and track auto-rickshaws.',
    techStack: ['Flutter', 'Google Maps API', 'Supabase', 'Fast API'],
    image: '/projects/nammaauto/image1.png',
    screenshots: [
      '/projects/nammaauto/image1.png',
      '/projects/nammaauto/image2.png',
      '/projects/nammaauto/image3.png',
      '/projects/nammaauto/image4.png',
      '/projects/nammaauto/image5.png',
      '/projects/nammaauto/image6.png',
      '/projects/nammaauto/image7.png',
      '/projects/nammaauto/image8.png',
      '/projects/nammaauto/image9.png',
      '/projects/nammaauto/image10.png',
      '/projects/nammaauto/image11.png',
      '/projects/nammaauto/image12.png'
    ],
    features: [
      'Real-time auto-rickshaw tracking',
      'Predicting High demand locations and guiding Drivers',
      'Prioritizing sensitive locations',
      'A real-time tracking system for shared autos'
      
    ],
    githubLink: 'https://github.com/SiddheshM716/NammaAuto'
  },
  {
    slug: 'hostelmate',
    title: 'HostelMate',
    description: 'A comprehensive web application for hostel room booking and management. Built with React.js and Node.js, HostelMate streamlines the process of finding and booking hostel accommodations.',
    techStack: ['React.js', 'Node.js', 'MySQL', 'Express.js'],
    image: '/projects/hostelmate/image1.png',
    screenshots: [
      '/projects/hostelmate/image1.png',
      '/projects/hostelmate/image2.png',
      '/projects/hostelmate/image3.png',
      '/projects/hostelmate/image4.png',
      '/projects/hostelmate/image5.png',
      '/projects/hostelmate/image6.png',
      '/projects/hostelmate/image7.png',
      '/projects/hostelmate/image8.png'
    ],
    features: [
      'Real-time room availability checking',
      'Secure online booking system',
      'Complaint management system',
      'Admin dashboard for hostel management'
    ],
    githubLink: 'https://github.com/Aadithyaa-Ravishankar/hostel_dbms'
  },
  {
    slug: 'healthypaws',
    title: 'HealthyPaws',
    description: 'Built with SwiftUI and SQLite, it offers personalized feeding tips, tracks last-fed times, and sets feeding reminders for optimal pet care.',
    techStack: ['Swift', 'SwiftUI', 'SQLite'],
    image: '/projects/healthypaws/image1.png',
    screenshots: [
      '/projects/healthypaws/image1.png',
      '/projects/healthypaws/image2.png',
      '/projects/healthypaws/image3.png',
      '/projects/healthypaws/image4.png',
      '/projects/healthypaws/image5.png',
      '/projects/healthypaws/image6.png',
      '/projects/healthypaws/image7.png'
    ],
    features: [
      'Pet health tracking and history',
      'Pet Diet Suggestions',
      'Offline data storage',
      'Pet profile management'
    ],
    githubLink: 'https://github.com/SiddheshM716/HealthyPaws'
  },
  {
    slug: 'ebookstoreapp',
    title: 'EbookStore',
    description: 'A desktop application for browsing and managing digital books. Built with Java Swing and MySQL, this application provides a seamless experience for users to discover, purchase, and manage their digital book collection.',
    techStack: ['Java Swing', 'MySQL', 'JDBC'],
    image: '/projects/ebookstoreapp/image3.png',
    screenshots: [
      '/projects/ebookstoreapp/image1.png',
      '/projects/ebookstoreapp/image2.png',
      '/projects/ebookstoreapp/image3.png',
      '/projects/ebookstoreapp/image4.png',
      '/projects/ebookstoreapp/image5.png',
      '/projects/ebookstoreapp/image6.png',
      '/projects/ebookstoreapp/image7.png',
      '/projects/ebookstoreapp/image8.png',
      '/projects/ebookstoreapp/image9.png',
      '/projects/ebookstoreapp/image10.png',
      '/projects/ebookstoreapp/image11.png'
    ],
    features: [
      'User authentication and profile management',
      'Browse and search books by category, author, or title',
      'Shopping cart and payment processing',
    ],
    githubLink: 'https://github.com/SiddheshM716/EbookStore'
  },
  {
    slug: 'plant-disease',
    title: 'Leaf Doctor',
    description: 'A machine learning project for detecting plant diseases from leaf images. Built with Python, TensorFlow, and OpenCV, this application helps farmers identify plant diseases early.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    image: '/projects/plant-disease/image1.png',
    screenshots: [
      '/projects/plant-disease/image1.png',
      '/projects/plant-disease/image2.png',
      '/projects/plant-disease/image3.png',
      '/projects/plant-disease/image4.png'
    ],
    features: [
      'Support for multiple plant species',
      'Disease severity analysis',
      'Treatment recommendations',
      'User-friendly web interface'
    ],
    githubLink: 'https://github.com/SiddheshM716/Plant-Disease-Detector'
  }
]; 