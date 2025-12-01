"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Posts", href: "/dashboard/posts", icon: FileText },
  { name: "Comments", href: "/dashboard/comments", icon: MessageSquare },
  { name: "Users", href: "/dashboard/users", icon: Users },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-full p-6 dark:bg-gray-800 bg-gray-300 text-black flex flex-col gap-4">

      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium 
                transition 
                ${isActive 
                  ? "bg-gray-900 text-white " 
                  : "hover:text-black text-black hover:bg-gray-100 dark:hover:text-black dark:text-white"
                }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
