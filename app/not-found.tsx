import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <div className="max-w-md">
        <TriangleAlert className="text-yellow-500 w-20 h-20 mx-auto mb-6"/>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-2xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
