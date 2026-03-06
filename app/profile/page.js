"use client";
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { useStore } from '@/lib/store';

export default function Profile() {
  const { user } = useStore();
  const refLink = `https://t.me/lakhpoti_bot?start=${user?.telegram_id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
    alert("রেফার লিংক কপি করা হয়েছে!");
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 text-center">প্রোফাইল</h1>
        <div className="bg-gray-800 p-5 rounded-xl mb-4">
          <p><strong>নাম:</strong> {user?.name}</p>
          <p><strong>ইউজার আইডি:</strong> {user?.telegram_id}</p>
          <p><strong>মোট রেফার:</strong> 0</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="font-bold mb-2">আপনার রেফার লিংক</h3>
          <div className="flex bg-gray-700 p-2 rounded items-center justify-between">
            <span className="text-xs truncate text-gray-300 w-3/4">{refLink}</span>
            <button onClick={copyLink} className="bg-blue-500 px-3 py-1 text-sm rounded">কপি</button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
