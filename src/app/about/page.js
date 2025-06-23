// src/app/about/page.js
import Image from 'next/image';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12 mt-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <Image
                src="/profile.jpeg" 
                alt="Paulah Profile"
                width={250}
                height={250}
                className="rounded-full border-4 border-orange-500 shadow-lg object-cover"
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Hi, I'm <span className="text-orange-400">Pauline</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                A passionate software developer from Nairobi, Kenya. I specialize in building responsive, user-friendly web and mobile applications that are both fast and meaningful.
              </p>
              <p className="text-gray-400 mb-4">
                My journey into tech began with a spark of curiosity and has grown into a full-blown passion for crafting code that solves real-world problems. I thrive on learning new technologies and continuously seek to enhance my skills across the full stack.
              </p>
              <p className="text-gray-400 mb-6">
                When I'm not coding, you can find me exploring tech communities, tackling coding challenges, or just vibing to some good music 🎧.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <FaDownload />
                  My Resume
                </a>
                <Link 
                  href="/contact"
                  className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <FaEnvelope />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-400">
            I’m currently open to freelance projects, internships, and full-time opportunities.
          </p>
          <p className="text-xl font-semibold text-white mt-2">
            Let’s build something great together!
          </p>
        </div>
      </div>
    </div>
  );
}
