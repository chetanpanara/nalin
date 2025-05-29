import React from "react";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  // Sample project data - you can replace this with props or fetch from API
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking.",
      image: "/api/placeholder/400/240",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com",
      date: "2024-03-15",
      status: "Completed",
    },
    {
      id: 2,
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI integration, featuring message encryption, file sharing, and smart conversation insights.",
      image: "/api/placeholder/400/240",
      technologies: ["Next.js", "TypeScript", "Socket.io", "Python"],
      githubUrl: "https://github.com/username/chat-app",
      liveUrl: "https://chat-demo.com",
      date: "2024-02-20",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Finance Tracker Mobile App",
      description:
        "Cross-platform mobile application for personal finance management with expense tracking, budget planning, and financial insights.",
      image: "/api/placeholder/400/240",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      githubUrl: "https://github.com/username/finance-app",
      liveUrl: null,
      date: "2024-01-10",
      status: "Completed",
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      React: "bg-blue-100 text-blue-800 border-blue-200",
      "Next.js": "bg-black text-white border-gray-800",
      "Node.js": "bg-green-100 text-green-800 border-green-200",
      MongoDB: "bg-green-100 text-green-800 border-green-200",
      Express: "bg-gray-100 text-gray-800 border-gray-200",
      TypeScript: "bg-blue-100 text-blue-800 border-blue-200",
      Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Socket.io": "bg-purple-100 text-purple-800 border-purple-200",
      "React Native": "bg-cyan-100 text-cyan-800 border-cyan-200",
      Firebase: "bg-orange-100 text-orange-800 border-orange-200",
      Redux: "bg-purple-100 text-purple-800 border-purple-200",
      "Chart.js": "bg-pink-100 text-pink-800 border-pink-200",
    };
    return colors[tech] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusColor = (status) => {
    return status === "Completed"
      ? "bg-green-100 text-green-800 border-green-200"
      : "bg-yellow-100 text-yellow-800 border-yellow-200";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my recent work showcasing various technologies and
            problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Date */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm ml-2">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(project.date)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Code size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      Technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 hover:scale-105 ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
