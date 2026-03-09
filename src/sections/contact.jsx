import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const state = location.state;
    if (state?.message) {
      setFormData((prev) => ({
        ...prev,
        message: state.message,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-[#4b3f28] text-xl" />,
      title: "Phone",
      details: "+1 (416) 555-7890",
      link: "tel:+14165557890",
    },
    {
      icon: <FaEnvelope className="text-[#4b3f28] text-xl" />,
      title: "Email",
      details: "hello@pixelforgestudios.com",
      link: "mailto:hello@pixelforgestudios.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#4b3f28] text-xl" />,
      title: "Address",
      details: "123 Design District, Toronto, ON, Canada",
      link: "#",
    },
    {
      icon: <FaClock className="text-[#4b3f28] text-xl" />,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss how we can help? Reach out to us using the form below or through
            our contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 semiboldText">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b3f28] focus:border-[#4b3f28] outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 semiboldText">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b3f28] focus:border-[#4b3f28] outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 semiboldText">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b3f28] focus:border-[#4b3f28] outline-none transition"
                  placeholder="+1 000 000 0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 semiboldText">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b3f28] focus:border-[#4b3f28] outline-none transition resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="text-white bg-[#4b3f28] px-8 py-4 rounded-lg shadow-md semiboldText 
                         border border-transparent hover:border-2 hover:border-[#4b3f28] 
                         hover:bg-white hover:text-[#4b3f28] transition duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#f9f6f1] p-3 rounded-xl border border-[#4b3f28]/10">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <a
                        href={item.link}
                        className={`text-gray-600 hover:text-[#4b3f28] transition ${
                          item.link === "#" ? "cursor-default" : ""
                        }`}
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { name: "Twitter", bg: "bg-[#4b3f28]/10", icon: "𝕏", hover: "hover:bg-[#4b3f28] hover:text-white" },
                    { name: "Instagram", bg: "bg-[#4b3f28]/10", icon: "IG", hover: "hover:bg-[#4b3f28] hover:text-white" },
                    { name: "LinkedIn", bg: "bg-[#4b3f28]/10", icon: "IN", hover: "hover:bg-[#4b3f28] hover:text-white" },
                    { name: "Facebook", bg: "bg-[#4b3f28]/10", icon: "FB", hover: "hover:bg-[#4b3f28] hover:text-white" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`${social.bg} text-[#4b3f28] w-10 h-10 rounded-full flex items-center justify-center ${social.hover} transition duration-300 border border-[#4b3f28]/20`}
                      aria-label={social.name}
                    >
                      <span className="font-bold">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-[#4b3f28]/5 to-[#4b3f28]/10 rounded-2xl p-8 border border-[#4b3f28]/20"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#4b3f28] rounded-full mr-2"></span>
                Quick Response Time
              </h4>
              <p className="text-gray-600 mb-4">
                We typically respond to inquiries within 24 hours during business days.
              </p>

              <h4 className="font-bold text-gray-900 mb-4 flex items-center mt-6">
                <span className="w-2 h-2 bg-[#4b3f28] rounded-full mr-2"></span>
                Free Consultation
              </h4>
              <p className="text-gray-600">
                Book a free 30-minute consultation to discuss your project requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}