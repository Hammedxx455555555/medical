import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Business Owner",
      review:
        "SGCREATION transformed our online presence. The website they built has greatly boosted our client engagement.",
      rating: 5,
      date: "July 15, 2025",
      photo: "https://via.placeholder.com/60", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Michael Smith",
      role: "Marketing Manager",
      review:
        "Professional and innovative team! They delivered on time and exceeded expectations.",
      rating: 4,
      date: "June 30, 2025",
      photo: "https://via.placeholder.com/60",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      review:
        "Working with SGCREATION was a game-changer. Their attention to detail and creativity are unmatched.",
      rating: 5,
      date: "May 20, 2025",
      photo: "https://via.placeholder.com/60",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
          
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">&quot;{t.review}&quot;</p>

            <div className="flex items-center justify-between">
              
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
                {t.rating < 5 &&
                  Array.from({ length: 5 - t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300" />
                  ))}
              </div>

              <div className="flex items-center gap-2">
                <img src={t.logo} alt="Google Logo" className="h-5" />
                <span className="text-xs text-gray-500">{t.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
