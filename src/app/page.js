
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <div className="max-w-2xl">
        <Image
          src="/profile.jpeg"
          alt="Pauline"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-orange"
        />
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Pauline 👋</h1>
        <p className="text-xl mb-8 text-gray-300">
          I'm a passionate software developer specializing in creating modern and responsive web applications.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/projects" className="bg-orange text-dark font-bold py-2 px-4 rounded-lg hover:bg-orange/90 transition-colors">
            Explore My Work
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/Paulah-linah" target="_blank" rel="noopener noreferrer" className="text-light hover:text-orange transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/pauline-nafuna-324abc21" target="_blank" rel="noopener noreferrer" className="text-light hover:text-orange transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="https://www.instagram.com/paulahlinah6/profilecard/?igsh=dHVueWpwcW13Mm56" target="_blank" rel="noopener noreferrer" className="text-light hover:text-orange transition-colors">
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </main>
  );
}
