"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Play, CheckCircle, MessageCircle, Send } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function Home() {
  const { setUser } = useStore();
  const [isTg, setIsTg] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // অ্যাপ ফুলস্ক্রিন করার জন্য
      
      const tgUser = tg.initDataUnsafe?.user;
      const startParam = tg.initDataUnsafe?.start_param; // রেফার চেকের জন্য

      if (tgUser) {
        // ডাটাবেসে ইউজার সেভ করা এবং ডাটা আনা
        fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ ...tgUser, start_param: startParam }),
        })
        .then(res => res.json())
        .then(data => {
          if (data.user) {
            // ইউজারের ডাটা এবং প্রোফাইল ছবি স্টোরে সেভ করা
            setUser({ ...data.user, photo_url: tgUser.photo_url });
          }
        });
      } else {
        setIsTg(false); // যদি টেলিগ্রামের বাইরে থেকে ওপেন করে
      }
    }
  }, []);

  if (!isTg) return <div className="flex h-screen items-center justify-center p-5 text-center"><h1 className="text-xl text-red-500 font-bold">এই অ্যাপটি শুধুমাত্র টেলিগ্রাম ব্যবহারকারীদের জন্য।</h1></div>;

  return (
    <div className="min-h-screen pb-24 bg-[#f3f4f6]">
      <Header />

      {/* ভিডিও টাস্ক সেকশন */}
      <div className="px-5 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-green-600 text-2xl">🕋</span> ভিডিও টাস্ক
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-xl">🕋</span></div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">ঈদ স্পেশাল 🕋</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2"><span className="text-xl">🌙</span></div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">বোনাস অ্যাডস 🎁</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2"><Play fill="currentColor" size={20} /></div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">সালামি ভিডিও ৩ 🌙</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2"><Play fill="currentColor" size={20} /></div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">সালামি ভিডিও ৪ 🌙</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
        </div>
      </div>

      {/* স্পেশাল কাজ সেকশন */}
      <div className="px-5">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-green-600 text-2xl">📿</span> স্পেশাল কাজ 📿
        </h3>
        <div className="flex flex-col gap-3">
          <TaskItem icon={<CheckCircle size={24}/>} title="Account Active ✅" reward="+10 টাকা" />
          <TaskItem icon={<Send size={24}/>} title="Join Channel" reward="+10 টাকা" />
          <TaskItem icon={<MessageCircle size={24}/>} title="Telegram Chat" reward="+10 টাকা" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function TaskItem({ icon, title, reward }) {
  return (
    <div className="bg-white flex items-center justify-between p-4 rounded-2xl shadow-sm border-l-4 border-yellow-400">
      <div className="flex items-center gap-4">
        <div className="text-blue-500">{icon}</div>
        <div>
          <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
          <p className="text-green-600 font-bold text-xs mt-1">{reward}</p>
        </div>
      </div>
      <button className="bg-gray-800 text-white text-xs font-bold px-5 py-2 rounded-full">শুরু</button>
    </div>
  );
}
