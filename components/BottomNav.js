"use client";
import { Home, CheckSquare, Trophy, Wallet, User } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 border-t border-gray-700 pb-safe z-50">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-green-400">
          <Home size={24} /><span className="text-[10px] mt-1">হোম</span>
        </Link>
        <Link href="/tasks" className="flex flex-col items-center text-gray-400 hover:text-green-400">
          <CheckSquare size={24} /><span className="text-[10px] mt-1">টাস্ক</span>
        </Link>
        <Link href="/leaderboard" className="flex flex-col items-center text-gray-400 hover:text-green-400">
          <Trophy size={24} /><span className="text-[10px] mt-1">লিডারবোর্ড</span>
        </Link>
        <Link href="/wallet" className="flex flex-col items-center text-gray-400 hover:text-green-400">
          <Wallet size={24} /><span className="text-[10px] mt-1">ওয়ালেট</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-green-400">
          <User size={24} /><span className="text-[10px] mt-1">প্রোফাইল</span>
        </Link>
      </div>
    </div>
  );
}
