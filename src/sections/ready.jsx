import React, { useState, useEffect } from "react";
import { FaClock, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Ready() {
  const [spotsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className="mx-6 md:mx-20 py-16 px-6 md:px-10 lg:px-24 bg-gradient-to-r from-[#4b3f28] to-[#6b5b3f] rounded-2xl text-white"
      id="cta"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FaClock className="text-white-300" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Transform Your Digital Presence Today</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
            Book your free strategy session now and get 20% off your first project. Limited spots available for new
            clients this month.
          </p>

          <div className="flex flex-wrap gap-8 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-center mb-1">{formatTime(timeLeft)}</div>
              <div className="text-sm opacity-80">Time Remaining</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-center mb-1">{spotsLeft}</div>
              <div className="text-sm opacity-80">Spots Left</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-2">Free Strategy Session</h3>
            <p className="opacity-90 mb-6">Includes:</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4b3f28] flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>30-Minute Consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4b3f28] flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Custom Project Roadmap</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4b3f28] flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>20% Off First Project</span>
              </li>
            </ul>

            <div className="space-y-4">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-[#E5C8A6] to-[#4b3f28] text-white py-4 px-6 rounded-xl font-bold text-center hover:from-[#4b3f28] hover:to-[#E5C8A6] transition-all duration-300 hover:shadow-2xl"
              >
                <span className="flex items-center justify-center gap-3">
                  <FaRocket />
                  Claim Your Spot
                </span>
              </Link>

              <p className="text-center text-sm opacity-80">No commitment. No pressure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}