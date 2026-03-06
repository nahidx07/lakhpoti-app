import Link from "next/link";
import { FaHome, FaTasks, FaTrophy, FaWallet, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full max-w-md bg-[#1a1a1a] border-t border-gray-800 flex justify-around py-3">
      <Link href="/" className="flex flex-col items-center text-yellow-500">
        <FaHome className="text-xl" />
        <span className="text-[10px]">Home</span>
      </Link>
      <Link href="/tasks" className="flex flex-col items-center text-gray-400">
        <FaTasks className="text-xl" />
        <span className="text-[10px]">Tasks</span>
      </Link>
      <Link href="/leaderboard" className="flex flex-col items-center text-gray-400">
        <FaTrophy className="text-xl" />
        <span className="text-[10px]">Leader</span>
      </Link>
      <Link href="/wallet" className="flex flex-col items-center text-gray-400">
        <FaWallet className="text-xl" />
        <span className="text-[10px]">Wallet</span>
      </Link>
    </div>
  );
}
