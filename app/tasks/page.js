"use client";
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import TaskCard from '@/components/TaskCard';
import { useStore } from '@/lib/store';

export default function Tasks() {
  const { user, setBalance } = useStore();

  const handleTask = async (type) => {
    if(!user) return;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ userId: user.telegram_id, taskType: type })
    });
    const data = await res.json();
    if(data.success) {
      alert("টাস্ক সফল! রিওয়ার্ড যোগ হয়েছে।");
      setBalance(data.newBalance);
    } else {
      alert(data.message || "টাস্কটি এখন করা যাবে না।");
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">টাস্ক সমূহ</h1>
        <TaskCard title="দৈনিক চেক-ইন" reward="1.00" buttonText="সংগ্রহ করুন" onClick={() => handleTask('daily')} />
        <TaskCard title="লিংক ক্লিক টাস্ক" reward="2.00" buttonText="শুরু করুন" onClick={() => handleTask('link')} />
      </div>
      <BottomNav />
    </div>
  );
}
