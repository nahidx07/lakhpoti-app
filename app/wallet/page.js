"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { useStore } from '@/lib/store';

export default function Wallet() {
  const { user } = useStore();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('bKash');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    if(user.balance < amount) return alert("পর্যাপ্ত ব্যালেন্স নেই!");

    await fetch('/api/withdraw', {
      method: 'POST',
      body: JSON.stringify({ userId: user.telegram_id, name: user.name, amount, method })
    });
    alert('উত্তোলন রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!');
    setAmount('');
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 text-center">ওয়ালেট</h1>
        <div className="bg-gray-800 p-6 rounded-xl text-center mb-6">
          <p className="text-gray-400">মোট আয়</p>
          <h2 className="text-3xl font-bold text-green-400">৳ {user?.total_earnings || "0.00"}</h2>
        </div>
        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">উত্তোলন করুন</h3>
          <form onSubmit={handleWithdraw} className="space-y-4">
            <select value={method} onChange={(e)=>setMethod(e.target.value)} className="w-full p-3 rounded bg-gray-700 outline-none">
              <option value="bKash">বিকাশ</option>
              <option value="Nagad">নগদ</option>
            </select>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} required placeholder="পরিমাণ (৳)" className="w-full p-3 rounded bg-gray-700 outline-none" />
            <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-lg">উত্তোলন</button>
          </form>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
