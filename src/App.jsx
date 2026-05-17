import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Rooms from "./components/Rooms"
import Amenities from "./components/Amenities"
import Food from "./components/Food"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden scroll-smooth">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO SECTION */}

      <Hero />

      {/* ROOM SECTION */}

      <Rooms />

      {/* AMENITIES SECTION */}

      <Amenities />

      {/* FOOD & MESS SECTION */}

      <Food />

      {/* CONTACT SECTION */}

      <Contact />

      {/* FOOTER */}

      <footer className="relative py-10 border-t border-white/10 bg-black">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">

              Sandhu PG
            </h2>

            <p className="text-gray-400 mt-2">
              Premium Student Living Near LPU
            </p>
          </div>

          {/* CENTER */}

          <div className="flex gap-8 text-gray-400">

            <a
              href="#home"
              className="hover:text-orange-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#rooms"
              className="hover:text-orange-400 transition duration-300"
            >
              Rooms
            </a>

            <a
              href="#amenities"
              className="hover:text-orange-400 transition duration-300"
            >
              Amenities
            </a>

            <a
              href="#food"
              className="hover:text-orange-400 transition duration-300"
            >
              Food
            </a>

            <a
              href="#contact"
              className="hover:text-orange-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* RIGHT */}

          <a
            href="https://wa.me/918427285016"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-7 py-3 rounded-2xl font-bold text-white shadow-[0_10px_30px_rgba(255,140,0,0.4)] transition duration-300 hover:scale-105">

              WhatsApp
            </button>
          </a>
        </div>

        {/* COPYRIGHT */}

        <div className="text-center text-gray-500 mt-10 text-sm border-t border-white/5 pt-8">

          © 2026 Sandhu PG Near LPU • All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default App