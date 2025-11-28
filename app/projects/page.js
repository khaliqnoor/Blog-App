"use client"
// pages/projects.jsx

const projects = [
  {
    title: "Build a MERN Stack App",
    desc: "Step-by-step guide to create a full-stack app with MongoDB, Express, React, and Node.js.",
    img: "/blogimage.jpg",
    link: "/blog/mern-stack"
  },
  {
    title: "JavaScript Tips & Tricks",
    desc: "Boost your JS skills with these practical tips for developers.",
    img: "/blogimage.jpg",
    link: "/blog/js-tips"
  },
  {
    title: "AI Basics for Beginners",
    desc: "Understand AI concepts and build your first AI project.",
    img: "/blogimage.jpg",
    link: "/blog/ai-basics"
  },
  {
    title: "Next.js Blog Tutorial",
    desc: "Learn how to create a modern blog using Next.js and Tailwind CSS.",
    img: "/blogimage.jpg",
    link: "/blog/nextjs-blog"
  },
];

export default function Projects() {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-12">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Projects & Tutorials</h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Explore all the coding projects and tutorials I’ve shared
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a key={idx} href={project.link} className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Optional Pagination */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Load More
        </button>
      </div>
      
    </div>
  );
}

