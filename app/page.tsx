"use client";


export default function Home() {

  // throw new Error("Testing error page");

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-br from-gray-950 via-gray-900 to-black font-sans">

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/40 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-rose-500/40 to-orange-400/20 rounded-full blur-3xl animate-float-medium"></div>

        <div className="absolute top-[50%] left-[60%] w-[250px] h-[250px] bg-gradient-to-bl from-sky-500/30 to-cyan-400/10 rounded-full blur-2xl animate-float-fast"></div>

        <div className="absolute bottom-[20%] left-[20%] w-[200px] h-[200px] bg-gradient-to-tr from-emerald-500/30 to-lime-400/10 rounded-full blur-2xl animate-float-medium"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 text-center max-w-3xl px-8">
        <h1 className="text-white text-5xl font-bold mb-5">Inventory Management</h1>

        <p className="text-white/90 max-w-xl mx-auto">
          Streamline your inventory with our powerful, easy-to-use management system.
          Track products, monitor stock levels, and gain valuable insights.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a href="/sign-in"
            className="rounded-md bg-indigo-500 px-4 py-2 text-white font-semibold hover:bg-indigo-600"
          >
            Sign In
          </a>

          <a href="/dashboard"
            className="rounded-md font-semibold border border-indigo-500 px-4 py-2 text-white hover:bg-indigo-500/20"
          >
            Dashboard
          </a>
        </div>
      </main>

      {/* Soft bottom gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/70"></div>
    </div>
  );
}
