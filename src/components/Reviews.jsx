import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, Minimize2, CircleStopIcon } from "lucide-react"

function TestimonialCard({ name, role, quote, avatarUrl, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="flex-shrink-0 w-[320px] md:w-[380px] rounded-[20px] p-5"
      style={{ backgroundColor: "#f6f7e9" }}
      layout
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-lg overflow-hidden">
          <img
            src={avatarUrl || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1a1a1a]">{name}</h3>
          <p className="text-sm font-medium text-[#4a4a4a] tracking-wide uppercase">{role}</p>
        </div>
      </div>

      <AnimatePresence>
        {!isExpanded && (
          <motion.p
            className="text-[#1a1a1a] text-lg font-medium leading-relaxed mb-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {quote}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div className="relative rounded-xl overflow-hidden" layout>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className={`w-full object-cover transition-all duration-300 ${
            isExpanded ? "h-[400px] md:h-[375px]" : "h-[150px]"
          }`}
        />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#4a4a4a]/80 flex items-center justify-center hover:bg-[#3a3a3a]/90"
        >
          {isExpanded ? (
            <Minimize2 className="w-4 h-4 text-white" />
          ) : (
            <Maximize2 className="w-4 h-4 text-white" />
          )}
        </button>
      </motion.div>
    </motion.div>
  )
}

const testimonials = [
  {
    id: 1,
    name: "Theron P.",
    role: "Restaurant Owner",
    quote:
      "The custom furniture designed by Interim has transformed our home. Each piece is a masterpiece that fits perfectly into our space and meets our aesthetic desires. The quality and craftsmanship are outstanding.!",
    avatarUrl: "/professional-man-in-suit-dark-hair.jpg",
    imageUrl: "/images/screenshot-202025-12-11-20at-208.png",
  },
  {
    id: 2,
    name: "Soren F.",
    role: "Home Owner",
    quote:
      "Working with Interim was an absolute pleasure. They understood our vision from day one and delivered beyond expectations. The attention to detail in every piece of furniture is remarkable. Our living space has never looked better!",
    avatarUrl: "/friendly-man-casual-style-brown-hair.jpg",
    imageUrl: "/modern-minimalist-living-room-with-white-furniture.jpg",
  },
  {
    id: 3,
    name: "Isolde V.",
    role: "Home Owner",
    quote:
      "Interim created the most beautiful dining set for our home. The craftsmanship is impeccable, and the design perfectly complements our interior. Every guest comments on how stunning our furniture is Truly",
    avatarUrl: "/elegant-woman-professional-headshot.jpg",
    imageUrl: "/elegant-dining-room-with-wooden-table-and-modern-c.jpg",
  },
  {
    id: 4,
    name: "Zephyr K.",
    role: "Shop Owner",
    quote:
      "Our retail space needed a complete transformation, and Interim delivered exactly that. The custom display units and furniture pieces have elevated our store's aesthetic tremendously Customers love !",
    avatarUrl: "/images/screenshot-202025-12-11-20at-208.png",
    imageUrl: "/images/screenshot-202025-12-11-20at-208.png",
  },
]


export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false)
  const looped = [...testimonials, ...testimonials]

  return (
    <main className="min-h-screen">
      <section className="py-16 overflow-hidden bg-[#fefff2]">
        <div className="max-w-7xl mx-auto px-4 mb-10 relative">
          <h1 className="text-[14rem] interServices mt-10 tracking-tight text-left text-[#1e3730]">
            Reviews
          </h1>

          <div className="flex gap-1 absolute top-0 left-0 translate-x-48 translate-y-25 items-center">
            <CircleStopIcon className="w-3 h-3 mb-[0.2rem]" />
            <h1 className="text-[#1e3730] text-[0.9rem] font-bold tracking-wide">
              CLIENTS WORDS
            </h1>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <motion.div
            className="flex gap-3 px-4 items-start"
            animate={{ x: isPaused ? undefined : [0, -50 * 16] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {looped.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
