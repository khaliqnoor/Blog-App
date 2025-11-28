"use client"
// pages/index.jsx
import Image from 'next/image';
import Link from 'next/link';

const recentBlogs = [
  {
    title: "Getting Started with MERN Stack",
    desc: "Learn how to build a full-stack app using MongoDB, Express, React, and Node.js.",
    img: "/blogimage.jpg",
    link: "/post"
  },
  {
    title: "Top 10 JavaScript Tips",
    desc: "Boost your JS skills with these practical tips and tricks.",
    img: "/blogimage3.avif",
    link: "/post/js-tips"
  },
  {
    title: "Understanding AI Basics",
    desc: "A beginner-friendly guide to AI concepts and applications.",
    img: "/blogimage3.avif",
    link: "/post/ai-basics"
  },
];

const categories = ["JavaScript", "MERN Stack", "AI & ML", "Web Development", "Tech Tools"];

export default function Home() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-96 lg:h-[500px]">
        <img
          src="/blogimage.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Level Up Your Coding Skills
          </h1>
          <p className="text-white text-lg md:text-xl mb-4">
            Tutorials, guides, and tips for developers
          </p>
          <Link
            href="/search"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            View all Posts
          </Link>
        </div>
      </section>

      {/* Recent Blogs */}
      <section id="recent-blogs" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog, idx) => (
            <a key={idx} href={blog.link} className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative w-full h-48">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">{blog.title}</h3>
                <p className="text-gray-600">{blog.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-12 dark:bg-[#050816] ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            I’m Khaliq, a web developer passionate about MERN stack and creating tech tutorials. I write to help developers improve their coding skills and build real projects.
          </p>
          <a href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="/profile.jfif" alt="Khaliq" className="rounded-lg shadow-lg w-full object-cover h-80" />
        </div>
      </section>

    </div>
  );
}
