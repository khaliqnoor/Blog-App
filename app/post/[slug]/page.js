"use client"
import { posts } from "@/lib/posts"
import { useUser } from "@clerk/nextjs"
import { useState } from "react"
import React from "react"

const PostPage = ({ params }) => {
  const { slug } =React.use(params) 
  const { user, isSignedIn } = useUser()

  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return <div className="text-center font-bold mt-20 min-h-screen">Post not found</div>
  }

  const recentBlogs = posts.filter((p) => p.slug !== slug).slice(0, 3)

  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState([])

  const handleComment = () => {
    if (!commentText.trim()) return

    const newComment = {
      id: Date.now(),
      text: commentText,
    }

    setComments([...comments, newComment])
    setCommentText("")
  }

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      
      {/* POST TITLE */}
      <h1 className="text-4xl font-bold leading-tight text-center mb-6">
        {post.title}
      </h1>

      {/* FEATURE IMAGE */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="rounded-xl shadow-md w-full max-h-[450px] object-cover"
        />
      </div>

      {/* META INFO */}
      <div className="flex justify-center gap-6 text-neutral-600 dark:text-neutral-400 text-sm mb-10">
        <p>{post.date}</p>
        <p>{post.readTime}</p>
      </div>

      {/* CONTENT */}
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.desc}</p>

        <div
          className="whitespace-pre-line mt-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* COMMENTS */}
      <div className="mt-16 border-t border-neutral-300 dark:border-neutral-700 pt-10">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>

        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full h-28 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 mt-2"
        />

        <button
          onClick={handleComment}
          className="mt-3 bg-black dark:bg-white text-white dark:text-black py-2 px-5 rounded-lg font-medium hover:opacity-90 transition"
        >
          Post Comment
        </button>

        {/* Comments List */}
        {isSignedIn ? (
          <div className="mt-10 flex flex-col gap-6">
            {comments.map((e) => (
              <div key={e.id} className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">{user.fullName}</p>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className="text-red-700 hover:text-red-800 font-semibold cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{e.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center font-bold text-red-700">Please sign in to view and post comments</div>
        )}
      </div>

      {/* Recent posts */}
      <section id="recent-blogs" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map((blog, idx) => (
            <a key={idx} href={blog.link} className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative w-full h-48">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
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
