"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 flex items-center space-x-1" aria-label="Breadcrumb">
      <Link href="/" className="hover:underline text-gray-600 font-medium">Home</Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const label = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        return (
          <span key={href} className="flex items-center space-x-1">
            <FaChevronRight className="mx-2 text-xs" />
            {index === segments.length - 1 ? (
              <span className="text-blue-600 font-semibold">{label}</span>
            ) : (
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
