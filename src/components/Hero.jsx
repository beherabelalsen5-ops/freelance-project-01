function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >

      {/* BACKGROUND IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
        alt="pg"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-orange-950/50"></div>

      {/* GLOW EFFECT */}

      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <div className="animate-[fadeIn_1.5s_ease]">

          {/* TAG */}

          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full mb-8">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

            <p className="text-orange-300 tracking-[4px] text-sm md:text-base font-semibold uppercase">
              Premium Student Living
            </p>
          </div>

          {/* TITLE */}

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] text-white">

            Sandhu
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">

              PG
            </span>
          </h1>

          {/* SUBTITLE */}

          <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold mt-6">
            Near LPU • Affordable • Modern • Secure
          </h2>

          {/* DESCRIPTION */}

          <p className="text-gray-400 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">
            Fully furnished student rooms with WiFi, AC,
            healthy food, laundry service, CCTV security,
            peaceful study environment, and modern facilities
            designed specially for LPU students.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-12">

            {/* WHATSAPP */}

            <a
              href="https://wa.me/918427285016"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 rounded-2xl text-white font-bold text-lg transition duration-300 shadow-[0_15px_40px_rgba(255,140,0,0.4)] hover:scale-105">

                Book on WhatsApp
              </button>
            </a>

            {/* EXPLORE */}

            <a href="#rooms">
              <button className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl text-white font-bold text-lg hover:bg-white hover:text-black transition duration-300">

                Explore Rooms
              </button>
            </a>
          </div>

          {/* FEATURES */}

          <div className="flex flex-wrap gap-4 mt-14">

            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl hover:bg-orange-500 transition duration-300">
              📶 Free WiFi
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl hover:bg-orange-500 transition duration-300">
              ❄️ AC Rooms
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl hover:bg-orange-500 transition duration-300">
              🍽️ Food Available
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl hover:bg-orange-500 transition duration-300">
              🛡️ CCTV Security
            </div>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h3 className="text-4xl md:text-5xl font-black text-orange-400">
                100+
              </h3>

              <p className="text-gray-400 mt-2">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-black text-orange-400">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Security
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-black text-orange-400">
                4.8★
              </h3>

              <p className="text-gray-400 mt-2">
                Reviews
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">

          {/* BACK GLOW */}

          <div className="absolute w-[90%] h-[90%] bg-orange-500/20 blur-[120px] rounded-full"></div>

          {/* MAIN IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="room"
            className="relative w-full max-w-2xl rounded-[32px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)] hover:scale-105 transition duration-700"
          />

          {/* FLOATING CARD */}

          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-xl border border-white/10 px-6 py-5 rounded-2xl shadow-2xl">

            <p className="text-gray-400 text-sm">
              Starting From
            </p>

            <h3 className="text-3xl font-black text-orange-400 mt-1">
              ₹2500/mo
            </h3>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default Hero