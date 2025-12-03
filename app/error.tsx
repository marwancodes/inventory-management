// "use client";

// import { OctagonAlert } from "lucide-react";
// import Link from "next/link";

// export default function ErrorPage({ error, reset }: { error?: Error; reset?: () => void }) {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 text-center">
//       <div className="p-10 max-w-md w-full animate-fadeIn">
//         <OctagonAlert className="text-red-500 w-16 h-16 mx-auto mb-4" />
//         <h1 className="text-4xl font-bold text-white mb-4">Something went wrong!!</h1>
//         <p className="text-gray-600 mb-6">
//           We encountered an unexpected error. Please try again or return home.
//         </p>
//         {error && (
//           <p className="text-sm text-gray-400 mb-6">{error.message}</p>
//         )}
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => reset && reset()}
//             className="px-5 py-2 rounded-xl bg-black text-white font-medium shadow hover:bg-black/80 transition cursor-pointer"
//           >
//             Try Again
//           </button>
//           <Link
//             href="/"
//             className="px-5 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 transition"
//           >
//             Go Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }