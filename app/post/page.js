"use client"
import React from "react"

const PostPage = () => {
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
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      {/* POST TITLE */}
      <h1 className="text-4xl font-bold leading-tight text-center mb-6">
         Understanding the AI Basics
      </h1>

      {/* FEATURE IMAGE */}
      <div className="w-full flex justify-center mb-6">
        <img
          src="/blogimage.jpg"
          alt="Post Image"
          className="rounded-xl shadow-md w-full max-h-[450px] object-cover"
        />
      </div>

      {/* META INFO */}
      <div className="flex justify-center gap-6 text-neutral-600 dark:text-neutral-400 text-sm mb-10">
        <p>📅 Jan 3, 2025</p>
        <p>⏱️ 5 min read</p>
      </div>

      {/* CONTENT */}
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur repellendus molestias esse, aut corrupti velit ad
          tempora cumque quaerat…
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptatibus culpa sed laboriosam fuga eius eum molestias?
        </p>

        <h2>Subheading Example</h2>
        <p>
          Another paragraph that explains something deeply. You can add images,
          code blocks, anything — Tailwind’s prose handles it beautifully.
        </p>
      </div>

      {/* COMMENTS SECTION */}
      <div className="mt-16 border-t border-neutral-300 dark:border-neutral-700 pt-10">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>

        {/* Comment Input */}
        <textarea
          placeholder="Write a comment..."
          className="w-full h-28 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 mt-2"
        ></textarea>

        <button className="mt-3 bg-black dark:bg-white text-white dark:text-black py-2 px-5 rounded-lg font-medium hover:opacity-90 transition">
          Post Comment
        </button>

        {/* Example Comments */}
        <div className="mt-10 flex flex-col gap-6">
          <div className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This post is amazing, keep it up!
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
            <p className="text-sm font-semibold">Another User</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Super helpful content 🔥
            </p>
          </div>
        </div>
      </div>
      {/* Recent posts section */}
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
    </div>
  )
}

export default PostPage
