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

export default function Home() {
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
    <main className="min-h-screen bg-[#2A4A42] mb-5 p-10 rounded-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Contact Info */}
        <div className="w-full lg:w-[45%] text-white p-8 lg:p-12">
          {/* Contact Details */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/5 rounded-lg p-5 flex justify-between items-center">
              <span className="text-sm font-medium tracking-wider text-gray-300">EMAIL</span>
              <span className="text-white">interimstudio@email.com</span>
            </div>
            <div className="bg-white/5 rounded-lg p-5 flex justify-between items-center">
              <span className="text-sm font-medium tracking-wider text-gray-300">PHONE</span>
              <span className="text-white">+1458741139</span>
            </div>
            <div className="bg-white/5 rounded-lg p-5 flex justify-between items-center">
              <span className="text-sm font-medium tracking-wider text-gray-300">OFFICE</span>
              <span className="text-white">123 Main Street Anytown, USA, 2141</span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-sm font-medium tracking-wider text-gray-300 mb-6">OPENING HOURS</h3>
            <div className="space-y-4">
              {openingHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C4956A]" />
                    <span className="text-white">{item.day}</span>
                  </div>
                  <span className="text-white">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-[55%] bg-[#F4F4EB] p-8 lg:p-12 rounded-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1E3A34] mb-4">Get a Free Estimate</h1>
          <p className="text-gray-600 mb-8">
            Reach out to us immediately to arrange for a customised quotation from one of our assessors. Phone us or
            complete the form provided below!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">PROJECT TYPE</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">Select...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Location, Budget, Project Size */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">LOCATION</label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">BUDGET</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">
                  PROJECT SIZE (SQFT)
                </label>
                <input
                  type="text"
                  name="projectSize"
                  placeholder="e.g., 1500"
                  value={formData.projectSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Start Date & Completion Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">
                  PREFERRED START DATE
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800"
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">
                  DESIRED COMPLETION DATE
                </label>
                <input
                  type="date"
                  name="completionDate"
                  value={formData.completionDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium tracking-wider text-gray-600 mb-2">MESSAGE</label>
              <textarea
                name="message"
                placeholder="Write your message here"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A34] text-gray-800 placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#E8A57A] hover:bg-[#D9956B] text-[#1E3A34] font-semibold rounded-lg transition-colors"
            >
              Request Free Estimate
            </button>
          </form>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
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
      </div>
    </main>
  )
}
