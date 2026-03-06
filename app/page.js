"use client";
import { useEffect, useState } from 'react';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';

export default function Home() {
  const { setUser } = useStore();
  const [isTg, setIsTg] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      const tgUser = tg.initDataUnsafe?.user;
      const startParam = tg.initDataUnsafe?.start_param; // For referral

      if (tgUser) {
        fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ ...tgUser, start_param: startParam }),
        }).then(res => res.json()).then(data => {
          if (data.user) setUser(data.user);
        });
      } else {
        setIsTg(false);
      }
    }
  }, []);

  if (!isTg) return <div className="flex h-screen items-center justify-center p-5 text-center"><h1 className="text-xl text-red-500 font-bold">এই অ্যাপটি শুধুমাত্র টেলিগ্রাম ব্যবহারকারীদের জন্য।</h1></div>;

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="m-4 p-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-2">লাখপতি অ্যাপে স্বাগতম 🎉</h1>
        <p className="text-sm">এখানে টাস্ক সম্পূর্ণ করে সহজেই আয় করতে পারবেন।</p>
      </motion.div>
      <BottomNav />
    </div>
  );
}
