"use client"
import { posts } from "@/lib/posts"
import { useState } from "react"

export default function Projects() {
  const [visible, setVisible] = useState(6) 
  const [isLoading, setIsLoading] = useState(false)

const loadMore = () => {
  if (isLoading) return          
  setIsLoading(true)             

  setTimeout(() => {
    setVisible(prev => prev + 3) 
    setIsLoading(false)          
  }, 1000)
}


  const isFinished = visible >= posts.length

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Total Posts: {posts.length}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, visible).map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        {!isFinished && (
          <button
            disabled={isLoading}
            onClick={loadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
          >
           {isLoading ? (
              <span className="w-6 h-6 border-2 flex border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Load More"
            )}
          </button>
        )}
      </div>
    </div>
  )
}
