import React from "react";
import { User, Settings, Users } from "lucide-react"; // updated icons

// Dynamic services data
const services = [
  {
    icon: <User size={24} className="text-white" />, // changed icon
    iconBg: "bg-blue-600",
    title: "Personal & Learning Strengths",
    features: [
      {
        label: "Self-Motivated Learner",
        desc: "Strong drive for personal growth and quick adaptation to new knowledge.",
      },
      {
        label: "Passionate About Farming & Camping",
        desc: "A natural interest in sustainable living and hands-on agricultural work.",
      },
      {
        label: "Developing Business & Analytical Skills",
        desc: "Actively learning budgeting, analytics, and farm-related problem-solving.",
      },
    ],
  },
  {
    icon: <Settings size={24} className="text-white" />, // changed icon
    iconBg: "bg-green-600",
    title: "Technical & Operational Skills",
    features: [
      {
        label: "Farm Operations Management",
        desc: "Skilled in managing farming processes and supervising field teams.",
      },
      {
        label: "Technical & Regulatory Handling",
        desc: "Capable of tackling technical challenges and aligning with government policies.",
      },
      {
        label: "Diverse Agricultural Experience",
        desc: "Hands-on experience in agriculture, horticulture, hydroponics, and protected farming.",
      },
    ],
  },
  {
    icon: <Users size={24} className="text-white" />, // changed icon
    iconBg: "bg-purple-600",
    title: "Training & Human-Nature Relations",
    features: [
      {
        label: "Training & Skill Development",
        desc: "Experienced in teaching essential farming tasks like seeding, spraying, and soil care.",
      },
      {
        label: "Human-Nature-Farming Connection",
        desc: "Dedicated to building meaningful relationships between people, farming, and the environment.",
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 mt-10">
          My Expertise
        </h2>
        <p className="text-md text-gray-400 max-w-3xl lg:text-lg md:text-lg mx-auto">
          Passionate and self-motivated agriculture professional with expertise
          in farm management, technical problem-solving, team training, and a
          strong commitment to sustainable farming and nature.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-800 rounded-lg p-7 hover:bg-gray-750 transition-all duration-300 hover:shadow-2xl border border-gray-700 flex flex-col h-full group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`${service.iconBg} p-3 rounded-full flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-200 text-sm flex-1">
              {service.features.map((feature) => (
                <li key={feature.label}>
                  <span className="font-bold text-white">{feature.label}</span>
                  <span className="text-gray-300"> – {feature.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
