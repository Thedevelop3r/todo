"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaChartBar, FaCog, FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className={`text-lg font-bold ${collapsed ? "hidden" : ""}`}>Dashboard</span>
          <button onClick={() => setCollapsed(!collapsed)}>
            <FaBars />
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2">
          <SidebarLink href="/" icon={<FaHome />} label="Home" collapsed={collapsed} />
          <SidebarLink href="/profile" icon={<FaUser />} label="Profile" collapsed={collapsed} />
          <SidebarLink href="/reports" icon={<FaChartBar />} label="Reports" collapsed={collapsed} />
          <SidebarLink href="/settings" icon={<FaCog />} label="Settings" collapsed={collapsed} />
        </nav>
      </aside>

      {/* Content placeholder */}
      <main className="flex-1 bg-gray-50 p-6">
        <h1 className="text-xl font-semibold">Your Content Here</h1>
      </main>
    </div>
  );
}

function SidebarLink({
  href,
  icon,
  label,
  collapsed,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-3 text-sm rounded hover:bg-gray-700 transition"
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
