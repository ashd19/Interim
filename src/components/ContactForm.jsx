import { useState } from "react"
import { Clock, Mail, Phone } from "lucide-react"

const openingHours = [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "9.00 AM - 6.00 PM" },
    { day: "Tuesday", hours: "9.00 AM - 6.00 PM" },
    { day: "Wednesday", hours: "9.00 AM - 6.00 PM" },
    { day: "Thursday", hours: "9.00 AM - 6.00 PM" },
    { day: "Friday", hours: "9.00 AM - 6.00 PM" },
    { day: "Saturday", hours: "9.00 AM - 6.00 PM" },
]

const projectTypes = ["Residential", "Commercial", "Industrial", "Renovation", "New Construction"]

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        location: "",
        budget: "",
        projectSize: "",
        startDate: "",
        completionDate: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <main className="min-h-screen bg-[#2A4A42] mb-10 p-5 sm:p-10 rounded-3xl">
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 h-full">
                {/* Left Panel - Contact Info */}
                <div className="w-full lg:w-[45%] text-white p-6 sm:p-10 lg:p-16 flex flex-col justify-between h-full">
                    <div>
                        {/* Contact Details */}
                        <div className="space-y-4 mb-10">
                            <div className="bg-white/5 rounded-xl p-5 flex flex-wrap justify-between items-center gap-3 group hover:bg-white/10 transition-all duration-300">
                                <span className="text-xs font-medium tracking-widest text-[#C4956A] inter-faq shrink-0">EMAIL</span>
                                <span className="text-sm sm:text-base text-white inter-nav break-all sm:break-normal">interimstudio@email.com</span>
                            </div>
                            <div className="bg-white/5 rounded-xl p-5 flex flex-wrap justify-between items-center gap-3 group hover:bg-white/10 transition-all duration-300">
                                <span className="text-xs font-medium tracking-widest text-[#C4956A] inter-faq shrink-0">PHONE</span>
                                <span className="text-sm sm:text-base text-white inter-nav">+1458741139</span>
                            </div>
                            <div className="bg-white/5 rounded-xl p-5 flex justify-between items-start sm:items-center gap-3 group hover:bg-white/10 transition-all duration-300">
                                <span className="text-xs font-medium tracking-tight whitespace-nowrap text-[#C4956A] inter-faq mt-1 sm:mt-0 shrink-0">OFFICE</span>
                                <span className="text-sm sm:text-base text-white inter-nav text-left sm:text-right max-w-full sm:max-w-[70%]">123 Main Street Anytown, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-white/5 rounded-2xl p-5 sm:p-8">
                        <h3 className="text-xs font-medium tracking-widest text-[#C4956A] mb-8 inter-faq uppercase">OPENING HOURS</h3>
                        <div className="space-y-5">
                            {openingHours.map((item) => (
                                <div key={item.day} className="flex flex-wrap items-center justify-between gap-2 group">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C4956A] group-hover:rotate-12 transition-transform shrink-0" />
                                        <span className="text-white inter-nav text-sm sm:text-base">{item.day}</span>
                                    </div>
                                    <span className="text-xs sm:text-sm text-white/80 inter-nav whitespace-nowrap">{item.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="w-full lg:w-[55%] bg-[#F4F4EB] p-6 sm:p-10 lg:p-16 rounded-3xl flex flex-col h-auto lg:h-full">
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#1E3A34] mb-4 inter tracking-tight leading-tight">
                        Get a Free Estimate
                    </h1>
                    <p className="text-gray-600 mb-10 inter-nav leading-relaxed opacity-80">
                        Reach out to us immediately to arrange for a customised quotation from one of our assessors. Phone us or
                        complete the form provided below!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Jane Smith"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">PHONE</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="(123) 456-7890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="jane@framer.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">PROJECT TYPE</label>
                            <div className="relative">
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav appearance-none cursor-pointer transition-all"
                                >
                                    <option value="">Select...</option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">LOCATION</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="City, State"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">BUDGET</label>
                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="Enter your budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">PROJECT SIZE (SQFT)</label>
                                <input
                                    type="text"
                                    name="projectSize"
                                    placeholder="e.g., 1500"
                                    value={formData.projectSize}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">PREFERRED START DATE</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">DESIRED COMPLETION DATE</label>
                                <input
                                    type="date"
                                    name="completionDate"
                                    value={formData.completionDate}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#1E3A34] mb-3 inter-faq uppercase">MESSAGE</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-5 py-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E8A57A] text-[#1E3A34] inter-nav placeholder:text-gray-300 transition-all resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-5 bg-[#E8A57A] hover:bg-[#D9956B] text-[#1E3A34] font-bold rounded-2xl transition-all duration-300 inter uppercase tracking-widest text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Request Free Estimate
                        </button>
                    </form>
                </div>
            </div>

            {/* Floating Action Buttons */}
            {/* <div className="fixed bottom-6 right-6 flex flex-col gap-3">
                <a
                    href="mailto:interimstudio@email.com"
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                    <Mail className="w-5 h-5 text-[#C4956A]" />
                    <span className="text-sm font-medium text-[#1E3A34]">Free Quote</span>
                </a>
                <a
                    href="tel:+15551234567"
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                    <Phone className="w-5 h-5 text-[#1E3A34]" />
                    <span className="text-sm font-medium text-[#1E3A34]">+1 555 123 4567</span>
                </a>
            </div> */}
        </main>
    )
}