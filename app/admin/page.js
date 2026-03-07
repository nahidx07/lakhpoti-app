"use client";
import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import Link from 'next/link';
import { Users, DollarSign, ListTodo, ArrowLeft } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useStore();
  const [isAdmin, setIsAdmin] = useState(false);
  
  // আপনার টেলিগ্রাম আইডি
  const ADMIN_ID = "5024973191";

  useEffect(() => {
    if(user?.telegram_id === ADMIN_ID) {
      setIsAdmin(true);
    }
  }, [user]);

  if(!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
        <h1 className="text-xl font-bold text-red-500">অ্যাক্সেস ডিনাইড! আপনি অ্যাডমিন নন।</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-10">
      {/* Admin Header */}
      <div className="bg-gray-900 text-white p-5 rounded-b-3xl shadow-md mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/profile" className="p-2 bg-gray-800 rounded-full">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">অ্যাডমিন প্যানেল 👑</h1>
        </div>
        <p className="text-sm text-gray-400">স্বাগতম, {user?.name}</p>
      </div>

      {/* Admin Stats */}
      <div className="px-5 grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2"><Users size={20}/></div>
          <p className="text-gray-500 text-xs font-bold">মোট ইউজার</p>
          <h2 className="text-xl font-extrabold text-gray-800">150</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2"><DollarSign size={20}/></div>
          <p className="text-gray-500 text-xs font-bold">পেন্ডিং উইথড্র</p>
          <h2 className="text-xl font-extrabold text-gray-800">12</h2>
        </div>
      </div>

      {/* Admin Menu */}
      <div className="px-5 flex flex-col gap-3">
        <button className="bg-white flex items-center justify-between p-4 rounded-2xl shadow-sm border border-gray-100">
          <span className="font-bold text-gray-700">ইউজার ম্যানেজমেন্ট</span>
          <Users size={20} className="text-gray-400"/>
        </button>
        <button className="bg-white flex items-center justify-between p-4 rounded-2xl shadow-sm border border-gray-100">
          <span className="font-bold text-gray-700">টাস্ক ম্যানেজমেন্ট</span>
          <ListTodo size={20} className="text-gray-400"/>
        </button>
        <button className="bg-white flex items-center justify-between p-4 rounded-2xl shadow-sm border border-gray-100">
          <span className="font-bold text-gray-700">উত্তোলন (Withdrawals)</span>
          <DollarSign size={20} className="text-gray-400"/>
        </button>
      </div>
    </div>
  );
}
