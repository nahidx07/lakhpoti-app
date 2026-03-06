import './globals.css';
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
      <body className="select-none">
        {children}
      </body>
    </html>
  );
}
