"use client"
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex dark:bg-[#050816]">

      
      <div className="hidden md:block w-64 border-r dark:bg-gray-800">
        <Sidebar />
      </div>

     
      {sidebarOpen && (
        <div className=" md:hidden">
          <div className="absolute h-full bg-black opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute  left-0 w-64  p-4">
            <button className="mb-4 text-black dark:text-white" onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 p-6">
      
        <div className="md:hidden mb-4">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>

        {children}
      </div>

    </div>
  );
}
