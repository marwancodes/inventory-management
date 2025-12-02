"use client";

import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">

      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-5 h-5" />
          <span className="text-md font-semibold">Inventory Management</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        <div className="text-sm font-semibold text-gray-400 uppercase">
          Inventory
        </div>

        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition ${
                isActive ? "bg-gray-700 text-white" : "text-gray-400"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
        <UserButton showUserInfo />
      </div>
    </div>
  );
};

export default Sidebar;
