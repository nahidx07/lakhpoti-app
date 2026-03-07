"use client";
import { Home, CheckSquare, Trophy, Wallet, User } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-100 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-green-600 active:text-green-600">
          <Home size={22} /><span className="text-[10px] mt-1 font-medium">হোম</span>
        </Link>
        <Link href="/tasks" className="flex flex-col items-center text-gray-400 hover:text-green-600">
          <CheckSquare size={22} /><span className="text-[10px] mt-1 font-medium">টাস্ক</span>
        </Link>
        <Link href="/leaderboard" className="flex flex-col items-center text-gray-400 hover:text-green-600">
          <Trophy size={22} /><span className="text-[10px] mt-1 font-medium">লিডারবোর্ড</span>
        </Link>
        <Link href="/wallet" className="flex flex-col items-center text-gray-400 hover:text-green-600">
          <Wallet size={22} /><span className="text-[10px] mt-1 font-medium">ওয়ালেট</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-green-600">
          <User size={22} /><span className="text-[10px] mt-1 font-medium">প্রোফাইল</span>
        </Link>
      </div>
    </div>
  );
}
