"use client";
import { useEffect, useState } from "react";

export default function Header({ user }) {
  return (
    <div className="flex justify-between items-center p-4 bg-[#1a1a1a] border-b border-yellow-600/30 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-black uppercase">
          {user?.name?.charAt(0) || "U"}
        </div>
        <div>
          <h2 className="text-sm font-bold">{user?.name || "Loading..."}</h2>
          <p className="text-[10px] text-gray-400">ID: {user?.id || "0000"}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1.5 rounded-full font-bold shadow-lg shadow-yellow-600/20">
        ৳ {user?.balance || 0}
      </div>
    </div>
  );
}
