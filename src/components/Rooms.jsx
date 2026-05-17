function Rooms() {
  const rooms = [
    {
      title: "Single Sharing Room",
      price: "₹4000/month",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Free WiFi",
        "Study Table",
        "Attached Washroom",
        "AC Room",
      ],
    },

    {
      title: "Double Sharing Room",
      price: "₹3200/month",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Peaceful Environment",
        "Laundry",
        "CCTV Security",
        "Modern Interior",
      ],
    },

    {
      title: "Triple Sharing Room",
      price: "₹2500/month",
      image:
        "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Budget Friendly",
        "Food Available",
        "Power Backup",
        "Student Friendly",
      ],
    },
  ]

  return (
    <section
      id="rooms"
      className="py-28 px-6 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <p className="text-orange-400 tracking-[6px] font-semibold text-lg">
            ROOM OPTIONS
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
            Explore Rooms
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Affordable and premium room options specially designed
            for students near LPU.
          </p>
        </div>

        {/* ROOM GRID */}

        <div className="grid md:grid-cols-3 gap-10">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-500"
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[300px] object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}

              <div className="p-8">

                <h3 className="text-3xl font-bold text-white">
                  {room.title}
                </h3>

                <h4 className="text-orange-400 text-4xl font-extrabold mt-5">
                  {room.price}
                </h4>

                {/* FEATURES */}

                <div className="mt-8 space-y-4">

                  {room.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-orange-400">
                        ✔
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}

                <a
                  href="https://wa.me/918427285016"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="mt-10 w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-lg transition duration-300 hover:scale-105">

                    Book Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms