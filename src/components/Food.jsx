function Food() {
  const foods = [
    {
      title: "Veg Thali",
      price: "₹80",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      desc: "Fresh roti, rice, dal, sabji, salad, and dessert.",
    },

    {
      title: "Student Combo",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
      desc: "Burger, fries, cold drink, and snacks for students.",
    },

    {
      title: "Breakfast Special",
      price: "₹60",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
      desc: "Healthy breakfast with sandwiches, tea, coffee, and fruits.",
    },
  ]

  const plans = [
    {
      title: "Basic Plan",
      price: "₹1800/month",
      desc: "Lunch + Dinner",
    },

    {
      title: "Premium Plan",
      price: "₹2500/month",
      desc: "Breakfast + Lunch + Dinner",
    },

    {
      title: "Deluxe Plan",
      price: "₹3200/month",
      desc: "Full Meals + Evening Snacks",
    },
  ]

  return (
    <section
      id="food"
      className="py-28 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <p className="text-orange-400 tracking-[6px] font-semibold text-lg">
            FOOD & MESS
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
            Student Food Services
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Fresh homemade meals and affordable mess plans
            specially designed for students near LPU.
          </p>
        </div>

        {/* FOOD ITEMS */}

        <div className="grid md:grid-cols-3 gap-10">

          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-500"
            >

              <img
                src={food.image}
                alt={food.title}
                className="w-full h-[280px] object-cover hover:scale-110 transition duration-700"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-white">
                  {food.title}
                </h3>

                <p className="text-gray-400 mt-5">
                  {food.desc}
                </p>

                <h4 className="text-orange-400 text-4xl font-bold mt-8">
                  {food.price}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* MONTHLY PLANS */}

        <div className="mt-28">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-extrabold text-white">
              Monthly Mess Plans
            </h2>

            <p className="text-gray-400 text-xl mt-5">
              Affordable subscription plans for students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-white/10 rounded-3xl p-10 text-center hover:bg-orange-500 transition duration-500 group"
              >

                <h3 className="text-3xl font-bold text-white group-hover:text-black">
                  {plan.title}
                </h3>

                <h4 className="text-5xl font-extrabold text-orange-400 mt-8 group-hover:text-black">
                  {plan.price}
                </h4>

                <p className="text-gray-400 mt-6 text-lg group-hover:text-black">
                  {plan.desc}
                </p>

                <a
                  href="https://wa.me/918427285016"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="mt-10 bg-orange-500 group-hover:bg-black text-white group-hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition duration-300">

                    Subscribe
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Food