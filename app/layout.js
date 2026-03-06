import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-black text-white min-h-screen pb-20">
        <div className="max-w-md mx-auto border-x border-gray-800 min-h-screen relative">
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}

