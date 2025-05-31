
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Nalin k Pagi | Family Farmer",
  description: "Family Farmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./img/cpnew.png" atl="logo" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900 text-white ">
        <Navbar />
        <div className="pt-16" style={{ fontFamily: "Poppins, sans-serif" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
