"use client";
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Copy, Send, Settings } from 'lucide-react';
import { useStore } from '@/lib/store';
import Link from 'next/link';

export default function Profile() {
  const { user } = useStore();
  const refLink = `https://t.me/lakhpoti_bot?start=${user?.telegram_id || '12345'}`;
  
  // আপনার টেলিগ্রাম আইডি এখানে দেওয়া হলো (স্ক্রিনশট থেকে নেওয়া)
  const ADMIN_ID = "5024973191"; 

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
    alert("রেফার লিংক কপি করা হয়েছে!");
  };

  return (
    <div className="min-h-screen pb-24 bg-[#f3f4f6]">
      <Header />

      {/* অ্যাডমিন প্যানেল বাটন (শুধুমাত্র আপনি দেখতে পাবেন) */}
      {user?.telegram_id === ADMIN_ID && (
        <div className="px-5 mb-6">
          <Link href="/admin" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors">
            <Settings size={20} /> অ্যাডমিন ড্যাশবোর্ডে প্রবেশ করুন
          </Link>
        </div>
      )}

      {/* দাওয়াত সেকশন */}
      <div className="px-5 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-green-600 text-2xl">🕌</span> দাওয়াত দিন 🕌
        </h3>
        
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 text-center">
          <p className="text-gray-700 font-bold text-sm mb-2">আপনার বন্ধুদের দাওয়াত দিন! প্রতি সফল রেফারে পাবেন</p>
          <p className="text-lg font-bold text-gray-800 mb-4">
            <span className="text-green-600">10.00</span> <span className="text-yellow-500 text-2xl">টাকা</span> বোনাস! 🌙
          </p>

          <div className="bg-gray-50 border border-gray-200 text-gray-600 text-xs p-3 rounded-xl mb-3 overflow-hidden text-ellipsis whitespace-nowrap font-medium">
            {refLink}
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-[#059669] text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2">
              <Send size={16} /> শেয়ার করুন
            </button>
            <button onClick={copyLink} className="bg-yellow-400 text-white p-3 rounded-xl">
              <Copy size={20} />
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
