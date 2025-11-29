"use client"
import React from "react"
import { posts } from "@/lib/posts"

const Page = () => {

  return (
    <div className="min-h-screen w-full flex gap-8 border-t max-w-7xl">
      
      {/* LEFT FILTERS */}
      <div className="w-68 bg-white dark:bg-gray-800  min-h-screen border-r  border-t border-gray-500 border-2 p-5  sticky shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="flex flex-col gap-5">

          {/* Search Term */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Search Term</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
              placeholder="Type something..."
            />
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Sort</label>
            <select
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
            >
              <option>Latest</option>
              <option>Oldest</option>
              <option>Most Popular</option>
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Category</label>
            <select
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
            >
              <option>All</option>
              <option>Tech</option>
              <option>Programming</option>
              <option>AI / ML</option>
              <option>Web Development</option>
            </select>
          </div>

          {/* Apply Button */}
          <button className="mt-3 bg-black cursor-pointer dark:bg-white text-white dark:text-black py-2 rounded-lg font-medium hover:opacity-85 transition">
            Apply Filters
          </button>
        </div>
      </div>

      {/* RIGHT RESULTS */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-5 mt-4 [font-family:'']">Posts Results</h1>
   <hr className="w-full font-bold text-xl mb-4" />
        {/* EMPTY STATE */}
        <div className="text-neutral-500 text-sm mb-6">
          Search something or use filters to find posts.
        </div>

        {/* POSTS GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((project, idx) => (
          <a key={idx} href={project.link} className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative w-full h-48">
              <img 
                src={project.image} 
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
      </div>
    </div>
  )
}

export default Page
