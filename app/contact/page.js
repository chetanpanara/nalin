"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Added MapPin

const page = () => {
  return (
    <div className="py-8 bg-gray-900  px-4 sm:px-6 lg:px-8">
      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-bold text-white mb-4">Contact Us</h2>
          <p className="text-md text-gray-400 max-w-3xl lg:text-lg md:text-lg mx-auto">
            lets contact us & build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
          {/* Email Card */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-gray-700">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Send us an email and we will get back to you within 24 hours.
                </p>
                <div className="space-y-1">
                  <a
                    href="chetanpanara8@gmail.com"
                    className="block text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 text-sm"
                  >
                    nalinpagi2007@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-gray-700">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Call us directly for immediate assistance and support.
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:+1234567890"
                    className="block text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 text-sm"
                  >
                    +91 99983 17292
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address Card with Location Icon */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:shadow-xl border border-gray-700">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Visit us at our location for any inquiries or support.
                </p>
                <div className="space-y-1">
                  <p className="block text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 text-sm">
                    82, Karanpur, Po Kheradi Ta Bhiloda Dist. Arvalli
                    Gujarat-383250
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
