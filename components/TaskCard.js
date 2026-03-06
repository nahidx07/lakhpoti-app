export default function TaskCard({ title, reward, onClick, buttonText }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center mb-4">
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-xs text-gray-400">রিওয়ার্ড: ৳ {reward}</p>
      </div>
      <button onClick={onClick} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-bold text-sm">
        {buttonText}
      </button>
    </div>
  );
}
