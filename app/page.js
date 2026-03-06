"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const fetchUser = async () => {
      const tgUser = tg.initDataUnsafe?.user;
      if (!tgUser) {
        // যদি টেলিগ্রাম ছাড়া অন্য লিঙ্ক থেকে ঢুকে
        // document.body.innerHTML = "Access Denied. Use Telegram Only.";
        return;
      }

      const userRef = doc(db, "users", tgUser.id.toString());
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data());
      } else {
        const newUser = {
          id: tgUser.id,
          name: tgUser.first_name,
          balance: 0,
          referrals: 0,
          linkClicksToday: 0,
          lastCheckIn: ""
        };
        await setDoc(userRef, newUser);
        setUser(newUser);
      }
    };
    fetchUser();
  }, []);

  return (
    <main>
      <Header user={user} />
      <div className="p-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-600/20 mb-6 text-center">
          <p className="text-gray-400 text-sm">Welcome Back</p>
          <h1 className="text-2xl font-bold text-yellow-500 mt-1">Lakhpoti - লাখপতি</h1>
        </div>
        {/* অন্যান্য স্ট্যাটাস কার্ড এখানে হবে */}
      </div>
    </main>
  );
}
