"use client";
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Copy, Send } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function Profile() {
  const { user } = useStore();
  const refLink = `https://t.me/lakhpoti_bot?start=${user?.telegram_id || '12345'}`;

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
    alert("রেফার লিংক কপি করা হয়েছে!");
  };

  return (
    <div className="min-h-screen pb-24 bg-[#f3f4f6]">
      <Header />

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
            <button className="flex-1 bg-[#059669] hover:bg-green-700 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 transition-colors">
              <Send size={16} /> শেয়ার করুন
            </button>
            <button onClick={copyLink} className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-xl transition-colors">
              <Copy size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* রেফার মাইলস্টোন */}
      <div className="px-5">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-green-600 text-2xl">🎁</span> রেফার মাইলস্টোন 🎁
        </h3>
        
        <div className="flex flex-col gap-3">
          <MilestoneCard target="৫০ জনকে দাওয়াত দিন" reward="250" progress="0/50" percentage={0} />
          <MilestoneCard target="১০০ জনকে দাওয়াত দিন" reward="500" progress="0/100" percentage={0} />
          <MilestoneCard target="২৫০ জনকে দাওয়াত দিন" reward="1250" progress="0/250" percentage={0} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function MilestoneCard({ target, reward, progress, percentage }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-yellow-400 relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-bold text-gray-800 text-sm">{target}</h4>
          <p className="text-green-600 font-bold text-xs mt-1">🪙 বোনাস: {reward} টাকা</p>
        </div>
        <div className="bg-yellow-100 text-yellow-700 font-bold text-xs px-3 py-1.5 rounded-full">
          {progress}
        </div>
      </div>
      {/* Progress bar background */}
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        {/* Progress bar fill */}
        <div className="bg-green-500 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
