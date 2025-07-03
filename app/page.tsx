import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Welcome To viz-Mail <br className="hidden sm:block" />
              <span className="text-blue-300 dark:text-blue-400">
                $implified chat with your inbox
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300"></p>
            <div className="mt-8 flex justify-center space-x-4">
              <button  className="px-6 py-2 bg-blue-600 text-white-800 rounded-lg shadow hover:bg-blue-700 transition">
                <a href="/signup" className="font-bold">Get Email</a>
              </button>
              <button className="px-6  py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
                <a href="/login" className="font-bold">Log In</a>
                
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
