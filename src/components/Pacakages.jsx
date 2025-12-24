import { Check, HomeIcon, Star, ShoppingCart, ArrowRight, CircleStop } from "lucide-react"
import Buttons from "./Buttons"

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
            className={`flex flex-col rounded-2xl transition-all duration-300 ${isDark ? "bg-[#22372F]" : "bg-[#F6F7E9]"
                }`}
        >
            <div className="flex flex-col gap-3 p-5 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-7 sm:pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E8A57A] sm:h-12 sm:w-12">
                        {icon}
                    </div>
                    <span className={`text-xl font-semibold interServices sm:text-2xl ${isDark ? "text-white" : "text-[#22372F]"}`}>
                        {title}
                    </span>
                </div>
                <span className={`text-xl font-semibold interServices sm:text-2xl ${isDark ? "text-[#E8A57A]" : "text-[#22372F]"}`}>
                    {price}
                </span>
            </div>

            {/* Features */}
            <div className="flex-1 px-5 sm:px-7">
                {features.map((feature, index) => (
                    <div key={index}>
                        <div className={`border-t ${isDark ? "border-white/20" : "border-[#22372F]/10"}`} />
                        <div className="flex items-start gap-3 py-3.5 sm:py-4.5">
                            <Check
                                className={`mt-1.5 h-4 w-4 shrink-0 ${isDark ? "text-white" : "text-[#22372F]"}`}
                                strokeWidth={2}
                            />
                            <span className={`text-sm sm:text-base leading-relaxed inter-nav ${isDark ? "text-white/90" : "text-[#22372F]/90"}`}>{feature}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            {/* <div className="p-5 pt-4 sm:p-7 sm:pt-5">
                <div className="flex items-center gap-2">
                    <button
                        className={`flex-1 rounded-xl py-3.5 px-6 text-base font-medium transition-all duration-200 hover:opacity-90 inter-nav sm:py-4 sm:px-8 ${isDark ? "bg-[#E8A57A] text-[#22372F]" : "bg-[#22372F] text-white"
                            }`}
                    >
                        {buttonText}
                    </button>
                    <button
                        className={`flex h-[52px] w-[52px] items-center justify-center rounded-xl transition-all duration-200 hover:opacity-90 sm:h-[60px] sm:w-[60px] ${isDark ? "bg-[#E8A57A] text-[#22372F]" : "bg-[#E8A57A] text-[#22372F]"
                            }`}
                    >
                        <ArrowRight className="h-6 w-6" />
                    </button>
                </div>
            </div> */}
            <div className="flex items-center justify-center  mb-8">
                
                <Buttons title={buttonText}/>
            </div>

        </div>
    )
}

export default function Home() {
    return (
        <main className="min-h-screen bg-[#fefff2]">
            <section className="w-full pt-16 md:pt- pb-10 md:pb-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto relative">
                    <div className="flex items-center justify-center md:absolute md:left-1/2 md:-top-4 md:-translate-x-1/2 ">
                        <CircleStop height={12} width={12} className="mr-2 text-[#1d332c]" />
                        <span className="text-[#1d332c]  text-sm sm:text-sm tracking-widest inter-nav uppercase">PRICING PLANS</span>
                    </div>
                    <h1 className="text-[#1d332c] font-bold text-7xl  sm:text-8xl md:text-8xl lg:text-[11vw] tracking-tighter text-center inter mt-4 md:mt-0">
                        Packages
                    </h1>
                </div>
            </section>

            {/* Pricing Cards Section */}
            <section className="w-full bg-[#fefff2] px-4 py-10 sm:py-16 md:py-10 lg:py-10">
                <div className="mx-auto grid max-w-[1400px] gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <PricingCard
                        icon={<HomeIcon className="h-6 w-6 text-[#22372F]" />}
                        title="Essentials"
                        price="$5,000"
                        features={essentialsFeatures}
                        buttonText="Book a Call"
                        variant="light"
                    />
                    <PricingCard
                        icon={<Star className="h-6 w-6 text-[#22372F]" />}
                        title="Premium"
                        price="$15,000"
                        features={premiumFeatures}
                        buttonText="Free Quote"
                        variant="dark"
                    />
                    <PricingCard
                        icon={<ShoppingCart className="h-6 w-6 text-[#22372F]" />}
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