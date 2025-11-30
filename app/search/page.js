"use client";
import React from "react";
import { posts } from "@/lib/posts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const Page = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(query) ||
      post.desc.toLowerCase().includes(query)
    );

    setFilteredPosts(result);
    setLoading(false); 
  }, 1000); 
}, [query]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row gap-8 border-t max-w-7xl mx-auto">
      <div className="flex-1 w-full ">
        <h1 className="text-2xl m-8 font-bold mb-5 mt-4">
          Posts Results 
        </h1>
        <hr className="w-full font-bold text-xl mb-4" />
        <div className="text-neutral-500 mx-8 text-sm mb-6">
          Search something or use filters to find posts.
        </div>

      
        {loading && (
           <p className="text-gray-600 font-bold text-center">Searching...</p>
        )}
     
     
        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-8 md:m-0 gap-8 ">
        {!loading && filteredPosts.length === 0 ? (
          <p className="text-gray-600 font-bold text-center">No posts found.</p>
        ) : (
          filteredPosts.map((project, idx) => (
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
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default Page;
