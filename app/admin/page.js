"use client";
import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

export default function AdminDashboard() {
  const { user } = useStore();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is Admin from NextJS Env via an API or safely here.
    // For simplicity, checking if telegram_id matches (must validate in backend in real prod)
    if(user?.telegram_id === "YOUR_ADMIN_ID_HERE") {
      setIsAdmin(true);
    }
  }, [user]);

  if(!isAdmin) return <h1 className="text-center text-red-500 mt-10">Access Denied</h1>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">অ্যাডমিন ড্যাশবোর্ড</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl text-center"><p>মোট ইউজার</p><h2 className="text-xl text-green-400">0</h2></div>
        <div className="bg-gray-800 p-4 rounded-xl text-center"><p>পেন্ডিং উইথড্র</p><h2 className="text-xl text-orange-400">0</h2></div>
      </div>
    </div>
  );
}
