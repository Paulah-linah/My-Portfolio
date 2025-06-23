import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

const projects = [
  {
    name: 'BikeFiesta',
    description: 'A comprehensive platform for cycling enthusiasts to discover events, routes, and connect with other riders.',
    image: '/projects/BikeFiesta.png', // Placeholder image
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    source: 'https://github.com/Paulah-linah/bikefiesta',
    demo: '',
  },
  {
    name: 'LaSafari Hotel',
    description: 'A luxury hotel booking website with a focus on elegant design and seamless user experience.',
    image: '/projects/la safari hotel.png', // Placeholder image
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Superbase'],
    source: 'https://github.com/Paulah-linah/lasafari-hotel',
    demo: '',
  },
  {
    name: 'Miedema Africa Limited',
    description: 'Corporate website for construction solutions provider, showcasing services and projects across Africa.',
    image: '/projects/Miedema Africa Limited.png', // Placeholder image
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    source: 'https://github.com/Paulah-linah/Miedema-Africa-Limited',
    demo: '',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange mb-4 text-center">My Work</h1>
        <p className="text-md sm:text-lg text-gray-300 mb-8 sm:mb-12 text-center">A selection of projects I've built.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange/20 transition-shadow duration-300 flex flex-col">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-light mb-2">{project.name}</h2>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-orange text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center text-light hover:text-orange transition-colors">
                    <Github size={20} className="mr-2" />
                    Source
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-orange text-dark font-bold py-2 px-4 rounded-lg hover:bg-orange/90 transition-colors text-sm">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
