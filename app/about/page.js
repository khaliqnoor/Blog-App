"use client"
import React from 'react'
import { posts } from '@/lib/posts'

const page = () => {

  const recentBlogs = posts.slice(0,3)

  return (
    <div className="bg-white dark:bg-[#050816]   text-gray-800">

      {/* HERO SECTION */}
      <section className="relative w-full h-64 md:h-80 lg:h-96">
  <img
    src='/blogimage.jpg'
    alt="Blog Hero"
    className="w-full h-full object-cover"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
  </div>
</section>

      {/* PROFILE CARD */}
      <section className="max-w-5xl mx-auto px-6 mt-6">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border">
          <img
            src="/profile.jfif"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-3">I'm Khaliq</h2>
            <p className="text-gray-600 leading-relaxed">
              A passionate learner and creator who's deep into tech, freelancing,
              web development, and building meaningful digital experiences.
              I use this blog to share ideas, tutorials, and lessons I learn
              along the way — raw, honest, and hopefully helpful.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">My Story</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I started this blog because I noticed something — most people online
          make things look too perfect. I wanted a space where real progress,
          real struggles, and real wins could be shared openly. Whether it's 
          coding, freelancing, mindset, or productivity, I break everything down 
          the way I understand it myself.
        </p>

        <p className="text-gray-600 leading-relaxed">
          My goal? Simple. Build cool things, learn every day, document the
          journey, and help others who are trying to level up their life using 
          tech. If you're here, then you’re already part of that journey.
        </p>
      </section>

     {/* Recent-Blogs */}
     <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold dark:text-white mb-4">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog,idx) => (
            <div key={idx}  className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blog.image}
                alt='blogimage'
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.desc}</p>
                <a
                  href={blog.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
     

    </div>
  )
}

export default page
