import { div } from "framer-motion/client";
import Head from "next/head";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Webinars en Training - Coming Soon</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800">
        <div className="text-center px-6 py-12 max-w-3xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg">
              <span className="font-bold text-xl">WT</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Webinars en Training
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We’re working hard to bring you an engaging platform with inspiring
            webinars and practical training sessions. Stay tuned, we’re almost
            there!
          </p>

          {/* Countdown */}
          <div className="flex justify-center items-center gap-8 mb-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-extrabold text-gray-800">
                  00{/* Replace with dynamic countdown */}
                </div>
                <div className="text-sm text-gray-500 uppercase">{unit}</div>
              </div>
            ))}
          </div>

          {/* Notification Form */}
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-lg hover:bg-blue-600 transition"
            >
              Notify Me
            </button>
          </form>

          {/* Footer */}
          <div className="mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} Webinars en Training. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
