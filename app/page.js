"use client";
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Play, CheckCircle, MessageCircle, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-24 bg-[#f3f4f6]">
      <Header />

      {/* ভিডিও টাস্ক সেকশন */}
      <div className="px-5 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-green-600 text-2xl">🕋</span> ভিডিও টাস্ক
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🕋</span>
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">ঈদ স্পেশাল 🕋</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🌙</span>
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">বোনাস অ্যাডস 🎁</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Play fill="currentColor" size={20} />
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-2">সালামি ভিডিও ৩ 🌙</h4>
            <div className="bg-[#059669] text-white text-[10px] px-3 py-1 rounded-full inline-block">0/30 সম্পন্ন</div>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Play fill="currentColor" size={20} />
            </div>
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

// রিইউজেবল টাস্ক কার্ড কম্পোনেন্ট
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
      <button className="bg-gray-800 text-white text-xs font-bold px-5 py-2 rounded-full">
        শুরু
      </button>
    </div>
  );
}
