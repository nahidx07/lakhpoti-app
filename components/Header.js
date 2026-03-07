"use client";
import { useStore } from '@/lib/store';
import { Headphones } from 'lucide-react';

export default function Header() {
  const { user } = useStore();

  return (
    <div className="relative mb-6">
      {/* উপরের সবুজ অংশ */}
      <div className="bg-[#059669] rounded-b-[2.5rem] pt-6 pb-20 px-6">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center gap-3 bg-white/20 px-3 py-1.5 rounded-full">
            <img 
              src="https://ui-avatars.com/api/?name=User&background=random" 
              alt="Profile" 
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <div>
              <h2 className="text-sm font-bold">{user?.name || "আপনার নাম"}</h2>
              <p className="text-[10px] opacity-80">ID: {user?.telegram_id || "12345678"}</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Headphones size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* মাঝখানের ব্যালেন্স কার্ড */}
      <div className="px-5 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 text-center border border-gray-50">
          <p className="text-gray-500 text-sm font-medium mb-1">মোট ব্যালেন্স 🤲🕋</p>
          <div className="flex justify-center items-end gap-2 mb-4">
            <h1 className="text-4xl font-extrabold text-[#059669]">{user?.balance || "0.00"}</h1>
            <span className="text-xl font-bold text-yellow-500 mb-1">টাকা</span>
          </div>
          
          <div className="border-t border-dashed border-gray-300 my-3"></div>
          
          <div className="flex justify-between text-sm">
            <div className="text-center w-1/2 border-r border-gray-200">
              <p className="text-lg font-bold text-gray-800">{user?.total_earnings || "0.00"}</p>
              <p className="text-gray-500 text-xs">জমা হয়েছে 🪙</p>
            </div>
            <div className="text-center w-1/2">
              <p className="text-lg font-bold text-gray-800">0</p>
              <p className="text-gray-500 text-xs">বন্ধুরা 👥</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
