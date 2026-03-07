import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'লাখপতি - আনিং অ্যাপ',
  description: 'টাস্ক সম্পূর্ণ করে সহজেই আয় করুন',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        {/* Telegram Mini App Script */}
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        
        {/* 🔥 Tailwind CSS CDN (এটি সব ডিজাইন ১০০% ফিক্স করে দিবে) 🔥 */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#f3f4f6] text-gray-800 select-none pb-24 font-sans">
        {children}
      </body>
    </html>
  );
}
