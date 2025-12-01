import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 dark:text-white dark:bg-blur text-gray-800 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tech <span className="text-blue-600">Blogs</span></h3>
          <p className="text-gray-600">
            Sharing thoughts, tutorials, and stories about tech, freelancing, and everything in between.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Tech</a></li>
            <li><a href="#" className="hover:text-blue-500">Freelancing</a></li>
            <li><a href="#" className="hover:text-blue-500">Tutorials</a></li>
            <li><a href="#" className="hover:text-blue-500">Lifestyle</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://x.com/KhaliqNoor369" target="_blank" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/khaliqnoor10/" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/khaliq-noor-712701380/" target="_blank" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-6 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tech Blogs. All rights reserved.
      </div>
    </footer>
  );
}
