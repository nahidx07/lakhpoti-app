"use client";
import { useStore } from '@/lib/store';

export default function Header() {
  const { user } = useStore();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-b-2xl shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-white">
          {user?.name?.charAt(0) || "U"}
        </div>
        <div>
          <h2 className="text-sm font-semibold">{user?.name || "লোড হচ্ছে..."}</h2>
          <p className="text-xs text-gray-400">আইডি: {user?.telegram_id}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">ব্যালেন্স</p>
        <p className="text-lg font-bold text-green-400">৳ {user?.balance || "0.00"}</p>
      </div>
    </div>
  );
}
