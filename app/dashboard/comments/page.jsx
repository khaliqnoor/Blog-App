import React from 'react'
import { posts } from '@/lib/posts';

const page = () => {
   const comments = [
    {
      _id: "1",
      username: "Khaliq",
      text: "This dashboard looks clean!",
      createdAt: "2025-12-03T12:00:00Z",
    },
    {
      _id: "2",
      username: "Ali",
      text: "Bro this UI is smooth.",
      createdAt: "2025-12-02T10:20:00Z",
    },
  ];
  const post = posts.find((title)=> title.title)

  return (
   <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-3xl space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-gray-400">No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div
              key={c._id}
              className="dark:bg-zinc-700 bg-gray-100 p-4 rounded-xl border border-zinc-800"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-black dark:text-white text-lg">{c.username}</h3>
                <span className="text-xs text-black  dark:text-gray-500">
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </div>
               <p>Post : {post.title}</p>
              <p className=" text-black  dark:text-gray-300 mt-2">{c.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default page
