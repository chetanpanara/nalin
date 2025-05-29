import Link from "next/link";
import { Facebook, Instagram, Github, Youtube } from "lucide-react";

// Custom X (Twitter) icon component since Lucide doesn't have the new X logo
const XIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/yourprofile",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/yourprofile",
    },
    { name: "GitHub", icon: Github, href: "https://github.com/yourprofile" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/yourchannel" },
    { name: "X (Twitter)", icon: XIcon, href: "https://x.com/yourprofile" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-16 py-6 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright Text */}
        <div className="text-gray-400 text-md text-center md:text-left">
          © {currentYear} nalinkantibhaipagi , Inc. All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          {/* {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <IconComponent size={22} />
              </Link>
            );
          })} */}
          <div className="text-gray-400 text-md text-center md:text-left">
            Developed by chetanpanara
          </div>
        </div>
      </div>
    </footer>
  );
}
