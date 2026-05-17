function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#0b0b0b] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-24">

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full">

            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>

            <p className="text-orange-400 tracking-[5px] font-semibold text-sm uppercase">
              Contact Us
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight">
            Get In
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">

              Touch
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Contact Sandhu PG for room bookings, food subscriptions,
            student accommodation details, and premium facilities
            near LPU.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* CONTACT CARD */}

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

              <h3 className="text-4xl font-black text-white mb-10">
                Contact Information
              </h3>

              <div className="space-y-8">

                {/* ADDRESS */}

                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500/20 text-3xl">

                    📍
                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      Address
                    </h4>

                    <p className="text-gray-400 mt-3 leading-relaxed">
                      Near Lovely Professional University,
                      Phagwara, Punjab
                    </p>
                  </div>
                </div>

                {/* PHONE */}

                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500/20 text-3xl">

                    📞
                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      Phone Number
                    </h4>

                    <p className="text-gray-400 mt-3">
                      +91 84272 85016
                    </p>
                  </div>
                </div>

                {/* FOOD */}

                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500/20 text-3xl">

                    🍽️
                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      Food Services
                    </h4>

                    <p className="text-gray-400 mt-3">
                      Daily Meals & Monthly Mess Available
                    </p>
                  </div>
                </div>

                {/* TIME */}

                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500/20 text-3xl">

                    🕒
                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      Availability
                    </h4>

                    <p className="text-gray-400 mt-3">
                      Open 24/7 for Students
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}

              <a
                href="https://wa.me/918427285016"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-12 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 py-5 rounded-2xl text-white font-bold text-xl transition duration-300 shadow-[0_15px_40px_rgba(255,140,0,0.4)] hover:scale-[1.02]">

                  Contact on WhatsApp
                </button>
              </a>
            </div>
          </div>

          {/* MAP */}

          <div className="relative">

            {/* MAP GLOW */}

            <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full"></div>

            {/* MAP */}

            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.7)]">

              <iframe
                src="https://maps.google.com/maps?q=31.26795758717304,75.70225978179477&z=17&output=embed"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sandhu PG Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact