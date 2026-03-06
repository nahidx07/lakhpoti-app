"use client";
import { useState } from "react";

export default function Tasks() {
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);

  const startLinkTask = (seconds, link) => {
    window.open(link, "_blank");
    setActive(true);
    setTimer(seconds);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setActive(false);
          // ব্যালেন্স অ্যাড করার API কল করুন এখানে
          alert("Task Completed! Reward Added.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4 border-l-4 border-yellow-500 pl-3">Daily Missions</h2>
      
      {/* Daily Check-in Card */}
      <div className="bg-[#1a1a1a] p-4 rounded-xl mb-3 flex justify-between items-center border border-gray-800">
        <div>
          <p className="font-semibold">Daily Checking</p>
          <p className="text-xs text-yellow-500">+ ৳ 2 Reward</p>
        </div>
        <button className="bg-yellow-600 px-4 py-1 rounded text-black font-bold">Claim</button>
      </div>

      {/* Link Click Card */}
      <div className="bg-[#1a1a1a] p-4 rounded-xl mb-3 border border-gray-800">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Link Click (0/20)</p>
            <p className="text-xs text-yellow-500">Wait {timer > 0 ? timer : "20"}s to claim</p>
          </div>
          <button 
            disabled={active}
            onClick={() => startLinkTask(20, "https://example.com")}
            className={`px-4 py-1 rounded font-bold text-black ${active ? 'bg-gray-600' : 'bg-yellow-600'}`}
          >
            {active ? `${timer}s` : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}
