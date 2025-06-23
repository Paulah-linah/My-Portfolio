// src/app/contact/page.js
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          I'm always excited to connect with new people. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out!
        </p>

        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Send a Message</h2>
              {/* Replace the action URL with your Formspree endpoint */}
              <form action="https://formspree.io/f/xvgrwwdr" method="POST">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Your Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-orange-400 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:paulahlinah28@gmail.com" className="text-gray-300 hover:text-orange-400">
                      paulahlinah28@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-orange-400 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+254700292205" className="text-gray-300 hover:text-orange-400">
                      +254 700 292 205
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-orange-400 text-2xl" />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a href="https://linkedin.com/in/pauline-adhiambo-a78b39259" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
                      Pauline Nafuna
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="text-orange-400 text-2xl" />
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a href="https://github.com/Paulah-linah" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
                      Paulah-linah
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaInstagram className="text-orange-400 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <a href="https://www.instagram.com/paulahlinah6/profilecard/?igsh=dHVueWpwcW13Mm56" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">
                      @paulahlinah6
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}