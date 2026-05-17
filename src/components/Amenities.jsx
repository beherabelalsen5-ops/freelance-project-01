function Amenities() {
  const amenities = [
    {
      icon: "📶",
      title: "High-Speed WiFi",
      desc: "Unlimited internet access for study, streaming, and gaming.",
    },

    {
      icon: "❄️",
      title: "AC & Non-AC Rooms",
      desc: "Comfortable rooms available according to student preferences.",
    },

    {
      icon: "🍽️",
      title: "Healthy Food",
      desc: "Fresh homemade breakfast, lunch, and dinner available daily.",
    },

    {
      icon: "🛡️",
      title: "24/7 Security",
      desc: "CCTV surveillance and secure environment for students.",
    },

    {
      icon: "🧺",
      title: "Laundry Service",
      desc: "Affordable and convenient laundry facilities available.",
    },

    {
      icon: "📚",
      title: "Study Environment",
      desc: "Peaceful atmosphere specially designed for focused learning.",
    },

    {
      icon: "⚡",
      title: "Power Backup",
      desc: "24-hour electricity backup for uninterrupted comfort.",
    },

    {
      icon: "🚿",
      title: "Clean Washrooms",
      desc: "Hygienic and regularly cleaned bathrooms and facilities.",
    },
  ]

  return (
    <section
      id="amenities"
      className="py-28 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <p className="text-orange-400 tracking-[6px] font-semibold text-lg">
            FACILITIES
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
            Premium Amenities
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Everything students need for comfortable and modern living
            near LPU.
          </p>
        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-white/10 rounded-3xl p-8 hover:bg-orange-500 transition duration-500 group hover:-translate-y-3"
            >

              {/* ICON */}

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              {/* TITLE */}

              <h3 className="text-2xl font-bold text-white group-hover:text-black transition duration-300">
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-gray-400 mt-5 leading-relaxed group-hover:text-black transition duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities