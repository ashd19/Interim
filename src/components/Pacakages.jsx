import { Check, HomeIcon, Star, ShoppingCart, ArrowRight, CircleStop } from "lucide-react"

const essentialsFeatures = [
  "Initial consultation and space assessment",
  "Basic concept design and mood board",
  "Floor plan layout",
  "Selection of color scheme and materials",
  "Furniture placement plan",
  "2D renderings of key areas",
  "Project timeline and budget overview",
]

const premiumFeatures = [
  "Everything in the Essentials Package plus:",
  "Detailed design development",
  "3D renderings of the entire space",
  "Custom furniture and fixture design",
  "Selection of art and decor items",
  "Comprehensive lighting plan",
  "Coordination with contractors and vendors",
  "Bi-weekly progress updates",
]

const luxuryFeatures = [
  "Everything in the Premium Package plus:",
  "Full project management from start to finish",
  "Personal shopping services for furniture and decor",
  "On-site supervision during implementation",
  "Custom-built elements and bespoke solutions",
  "Post-completion styling and final touches",
  "Detailed documentation and maintenance guide",
  "Client access to exclusive design resources and events",
]

function PricingCard({ icon, title, price, features, buttonText, variant }) {
  const isDark = variant === "dark"

  return (
    <div
      className={`flex flex-col rounded-xl transition-all duration-300 ${
        isDark ? "bg-[#22372F]" : "bg-[#F6F7E9]"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 p-4 pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-6 sm:pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E8A57A] sm:h-12 sm:w-12">
            {icon}
          </div>
          <span className={`text-lg font-semibold sm:text-xl ${isDark ? "text-white" : "text-[#22372F]"}`}>
            {title}
          </span>
        </div>
        <span className={`text-lg font-semibold sm:text-xl ${isDark ? "text-[#E8A57A]" : "text-[#22372F]"}`}>
          {price}
        </span>
      </div>

      {/* Features */}
      <div className="flex-1 px-4 sm:px-6">
        {features.map((feature, index) => (
          <div key={index}>
            <div className={`border-t ${isDark ? "border-white/20" : "border-[#22372F]/10"}`} />
            <div className="flex items-start gap-3 py-3 sm:py-4">
              <Check
                className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-white" : "text-[#22372F]"}`}
                strokeWidth={2}
              />
              <span className={`text-sm leading-relaxed ${isDark ? "text-white" : "text-[#22372F]"}`}>{feature}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="p-4 pt-3 sm:p-6 sm:pt-4">
        <div className="flex items-center gap-1">
          <button
            className={`flex-[0.4] rounded-xl py-3 px-4 text-sm font-medium transition-all duration-200 hover:opacity-90 sm:py-4 sm:px-6 ${
              isDark ? "bg-[#E8A57A] text-[#22372F]" : "bg-[#22372F] text-white"
            }`}
          >
            {buttonText}
          </button>
          <button
            className={`flex h-[46px] w-[46px] items-center justify-center rounded-xl transition-all duration-200 hover:opacity-90 sm:h-[52px] sm:w-[52px] ${
              isDark ? "bg-[#E8A57A] text-[#22372F]" : "bg-[#E8A57A] text-[#22372F]"
            }`}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefff2]">
      {/* Heading Section */}
      <section className="w-full pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <CircleStop height={12} width={12} className="mr-2 text-[#1d332c]" />
            <span className="text-[#1d332c] font-light text-sm tracking-wide">PRICING PLANS</span>
          </div>
          <h1 className="text-[#1d332c] font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-[12vw] tracking-tighter text-center">
            Packages
          </h1>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full bg-[#fefff2] px-4 py-8 sm:py-12 md:py-16">
        <div className="mx-auto grid max-w-8xl gap-4 sm:gap-3 md:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            icon={<HomeIcon className="h-5 w-5 text-[#22372F] sm:h-6 sm:w-6" />}
            title="Essentials"
            price="$5,000"
            features={essentialsFeatures}
            buttonText="Book a Call"
            variant="light"
          />
          <PricingCard
            icon={<Star className="h-5 w-5 text-[#22372F] sm:h-6 sm:w-6" />}
            title="Premium"
            price="$15,000"
            features={premiumFeatures}
            buttonText="Free Quote"
            variant="dark"
          />
          <PricingCard
            icon={<ShoppingCart className="h-5 w-5 text-[#22372F] sm:h-6 sm:w-6" />}
            title="Luxury"
            price="$30,000"
            features={luxuryFeatures}
            buttonText="Book a Call"
            variant="light"
          />
        </div>
      </section>
    </main>
  )
}
