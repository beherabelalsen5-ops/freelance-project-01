import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}

        <div className="cursor-pointer select-none">

          <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent leading-none tracking-wide">

            Sandhu PG
          </h1>

          <p className="text-gray-300 text-[10px] md:text-sm tracking-[4px] mt-2 font-medium uppercase">
            Premium Student Living Near LPU
          </p>
        </div>

        {/* DESKTOP NAV */}

        <div className="hidden md:flex items-center gap-10 text-lg font-medium text-white">

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

        {/* RIGHT SECTION */}

        <div className="flex items-center gap-4">

          {/* WHATSAPP BUTTON */}

          <a
            href="https://wa.me/918427285016"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block"
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-7 py-3 rounded-2xl font-bold text-white shadow-[0_10px_30px_rgba(255,140,0,0.4)] transition duration-300 hover:scale-105">

              Book Now
            </button>
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-white text-lg font-medium animate-[fadeIn_0.3s_ease]">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400"
          >
            Home
          </a>

          <a
            href="#rooms"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400"
          >
            Rooms
          </a>

          <a
            href="#amenities"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400"
          >
            Amenities
          </a>

          <a
            href="#food"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400"
          >
            Food
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-400"
          >
            Contact
          </a>

          <a
            href="https://wa.me/918427285016"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-white transition duration-300">

              Book on WhatsApp
            </button>
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar