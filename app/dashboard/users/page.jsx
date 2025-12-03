import React from 'react'

const page = () => {
  const users = [
    {
      id: "1",
      username: "khaliq",
      email: "khaliq@example.com",
      createdAt: "2025-12-03T10:00:00Z",
    },
    {
      id: "2",
      username: "ali",
      email: "ali@example.com",
      createdAt: "2025-12-01T14:30:00Z",
    },
    {
      id: "3",
      username: "fatima",
      email: "fatima@example.com",
      createdAt: "2025-11-29T09:15:00Z",
    },
  ];
  return (
     <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold">
          Total Users: {users.length}
        </h1>

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-200 p-4 rounded-xl border border-zinc-800"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-black dark:text-black">
                {user.username}
              </h3>

              <span className="text-xs text-gray-500">
                {new Date(user.createdAt).toLocaleString()}
              </span>
            </div>

            <p className="text-gray-900 dark:text-black mt-2">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
