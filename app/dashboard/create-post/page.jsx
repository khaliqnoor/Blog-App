"use client";

import { useState } from "react";

export default function CreatePostPage() {
  const [form, setForm] = useState({
    slug: "",
    title: "",
    image: "",
    desc: "",
    content: "",
    date: "",
    readTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-3xl dark:bg-zinc-900 bg-gray-300  p-6 rounded-2xl border border-zinc-800 space-y-6">
        <h1 className="text-2xl font-semibold">Create New Post</h1>

        <div className="space-y-4">
          <input
            name="slug"
            placeholder="Slug (e.g. how-to-learn-node)"
            value={form.slug}
            onChange={handleChange}
            className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200  border border-zinc-700 outline-none focus:border-zinc-500"
          />

          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200 border border-zinc-700 outline-none focus:border-zinc-500"
          />

          <input
            type="file"
            name="image"
            placeholder="Choose Image"
            value={form.image}
            onChange={handleChange}
            className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200 border border-zinc-700 outline-none focus:border-zinc-500"
          />


          <textarea
            name="desc"
            placeholder="Short Description"
            rows={3}
            value={form.desc}
            onChange={handleChange}
            className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200 border border-zinc-700 outline-none focus:border-zinc-500"
          />

          <textarea
            name="content"
            placeholder="Full Content..."
            rows={6}
            value={form.content}
            onChange={handleChange}
            className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200 border border-zinc-700 outline-none focus:border-zinc-500"
          />

          <div className="flex gap-4">
            <input
              name="date"
              placeholder="Date (e.g. Jan 3, 2025)"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200 border border-zinc-700 outline-none focus:border-zinc-500"
            />

            <input
              name="readTime"
              placeholder="Read Time (e.g. 6 min read)"
              value={form.readTime}
              onChange={handleChange}
              className="w-full p-3 rounded-lg dark:bg-zinc-800  bg-gray-200 border border-zinc-700 outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition font-semibold"
        >
          Create Post
        </button>
      </div>
    </div>
  );
}
