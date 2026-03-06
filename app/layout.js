import './globals.css'; // এই লাইনটি সবচেয়ে জরুরি!
import Script from 'next/script';

export const metadata = {
  title: 'লাখপতি - Lakhpoti',
  description: 'টাস্ক সম্পূর্ণ করে সহজেই আয় করুন',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      {/* বডির ব্যাকগ্রাউন্ড এবং টেক্সট কালার এখানে দিয়ে দিলাম */}
      <body className="bg-gray-900 text-white select-none">
        {children}
      </body>
    </html>
  );
}
